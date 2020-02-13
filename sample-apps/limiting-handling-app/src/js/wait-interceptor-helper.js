const Promise = require('bluebird')
const Queue = require('bee-queue')

let waitFnQueue, waitFnWorker

const runWaitInterceptor = (waitTimeout, callback) => {
    return waitFnQueue
        .createJob()
        .timeout(1000)
        .retries(0)
        .save()
        .then((job) => {
            const timeoutTimer = setTimeout(() => {
                console.error(`Waited for a job ${job.id} to be executed more than ${waitTimeout} ms`)
                waitFnQueue.removeJob(job.id)
                callback(new Error(`Job ${job.id} wait timeout ${waitTimeout} ms`))
            }, waitTimeout)
            job.once('succeeded', (result) => {
                clearTimeout(timeoutTimer)
                console.log(`Job ${job.id} succeeded with result: ${result}`)
                return callback()
            })

            return job.once('failed', (err) => {
                clearTimeout(timeoutTimer)
                console.log(`Job ${job.id} failed with error ${err.message}`)
                return callback(err)
            })
        })
        .catch((err) => {
            console.log(`Error ${err.message} received on adding job to que`)
            return callback(err)
        })
}

const runWaitInterceptorPromisified = Promise.promisify(runWaitInterceptor)

module.exports = {
    init: () => {
        try {
            waitFnQueue = new Queue('waitFn', {
                isWorker: false,
                removeOnSuccess: true,
                removeOnFailure: true,
            })
            waitFnWorker = new Queue('waitFn', {
                isWorker: true,
                removeOnSuccess: true,
                removeOnFailure: true,
            })

            waitFnWorker.process(async (job) => {
                console.log(`Processing job ${job.id}`)
                await Promise.delay(110)
                return Date.now()
            })
        } catch (e) {
            console.error('Cannot configure Queue')
            console.error(e)
            throw e
        }
    },
    getWaitInterceptor: (waitTimeout) => () => runWaitInterceptorPromisified(waitTimeout),
}
