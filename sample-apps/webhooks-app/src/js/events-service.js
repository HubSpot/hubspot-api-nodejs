const dbHelper = require('./db-helper')

exports.getHandler = () => {
    return (message) => {
        const events = JSON.parse(message.value)
        return dbHelper.addEvents(events)
    }
}
