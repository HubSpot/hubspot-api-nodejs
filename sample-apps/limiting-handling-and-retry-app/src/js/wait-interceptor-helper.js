const Promise = require('bluebird')
const Queue = require('bee-queue')

const REDIS_HOST = process.env.REDIS_HOST || '127.0.0.1'
const THROTTLING_DELAY_TIME = 110
let waitFnQueue, waitFnWorker

const runWaitInterceptor = (waitTimeout, callback) => {
    return waitFnQueue
        .createJob()
        .timeout(1000)
        .retries(0)
        .save()
        .then((job) => {
            const timeoutTimerId = setTimeout(() => {
                console.error(`Waited for a job ${job.id} to be executed more than ${waitTimeout} ms`)
                waitFnQueue.removeJob(job.id)
                callback(new Error(`Job ${job.id} wait timeout ${waitTimeout} ms`))
            }, waitTimeout)
            job.once('succeeded', (result) => {
                clearTimeout(timeoutTimerId)
                console.log(`Job ${job.id} succeeded with result: ${result}`)
                return callback()
            })

            return job.once('failed', (err) => {
                clearTimeout(timeoutTimerId)
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
                redis: {
                    host: REDIS_HOST,
                },
                isWorker: false,
                removeOnSuccess: true,
                removeOnFailure: true,
            })
            waitFnWorker = new Queue('waitFn', {
                redis: {
                    host: REDIS_HOST,
                },
                isWorker: true,
                removeOnSuccess: true,
                removeOnFailure: true,
            })

            waitFnWorker.process(async (job) => {
                console.log(`Processing job ${job.id}`)
                await Promise.delay(THROTTLING_DELAY_TIME)
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
