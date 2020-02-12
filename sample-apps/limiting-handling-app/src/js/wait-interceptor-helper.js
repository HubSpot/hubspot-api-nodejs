const Promise = require('bluebird')
const Queue = require('bee-queue')

let waitFnQueue, waitFnWorker

const runWaitInterceptor = (waitTimeout, callback) => {
    return waitFnQueue
        .createJob({ waitTimeout })
        .timeout(waitTimeout)
        .retries(0)
        .save()
        .then((job) => {
            job.once('succeeded', (result) => {
                console.log(`Job ${job.id} succeeded with result: ${result}`)
                return callback()
            })

            return job.once('failed', (err) => {
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
            })
            waitFnWorker = new Queue('waitFn', {
                isWorker: true,
            })

            waitFnWorker.process(async (job) => {
                console.log(`Processing job ${job.id}`)
                await Promise.delay(130)
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
