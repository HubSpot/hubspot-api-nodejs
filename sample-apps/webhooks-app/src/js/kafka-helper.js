const kafka = require('kafka-node')
const Promise = require('bluebird')

const KAFKA_EVENT_TOPIC = process.env.EVENT_TOPIC || 'events'
const KAFKA_GROUP_ID = process.env.KAFKA_GROUP_ID || 'events'
const KAFKA_HOST = process.env.KAFKA_BROKER_LIST

let producer
let consumer

const initProducer = () => {
    return new Promise((resolve, reject) => {
        const Producer = kafka.Producer
        const producerClient = new kafka.KafkaClient({ kafkaHost: KAFKA_HOST })
        const producer = new Producer(producerClient)

        producer.on('ready', () => {
            console.log('Producer ready. Refresh metadata')
            producerClient.refreshMetadata([KAFKA_EVENT_TOPIC], (error) => {
                if (error) {
                    console.error('Producer refresh metadata error:', error)
                    reject(error)
                }
                resolve(producer)
            })
        })

        producer.on('error', (err) => {
            console.log('Producer error')
            console.error(err)
        })
    })
}

const initConsumer = (eventsHandler) => {
    return new Promise((resolve, reject) => {
        const Consumer = kafka.Consumer
        const consumerClient = new kafka.KafkaClient({ kafkaHost: KAFKA_HOST })

        const consumer = new Consumer(consumerClient, [{ topic: KAFKA_EVENT_TOPIC }], {
            groupId: KAFKA_GROUP_ID,
            autoCommit: true,
        })

        consumer.on('error', (err) => {
            console.log('Consumer error')
            console.error(err)
        })

        console.log('Consumer ready. Refresh metadata')
        consumerClient.refreshMetadata([KAFKA_EVENT_TOPIC], (error, data) => {
            if (error) {
                console.error('Consumer refresh metadata error', error)
                reject(error)
            } else {
                consumer.on('message', (message) => {
                    console.log('Received', message)
                    eventsHandler(message)
                })
                resolve(consumer)
            }
        })
    })
}

exports.init = async (eventsHandler) => {
    if (!producer) {
        producer = await initProducer()
    }
    if (!consumer) {
        consumer = await initConsumer(eventsHandler)
    }
}

exports.send = (event) => {
    return new Promise((resolve, reject) => {
        console.log('Sending', event)
        producer.send(
            [
                {
                    topic: KAFKA_EVENT_TOPIC,
                    messages: JSON.stringify(event),
                    key: '',
                },
            ],
            (error, data) => {
                if (error) {
                    console.error(error)
                    reject(error)
                } else resolve(data)
            },
        )
    })
}
