const _ = require('lodash')
const NOT_FOUND_CODE = 404

module.exports = {
    logResponse: (response) => console.log('Response from API', JSON.stringify(response, null, 2)),
    checkIfNotFoundResponseStatus: (e) => {
        const statusCode = _.get(e, 'response.statusCode')

        return _.isEqual(statusCode, NOT_FOUND_CODE)
    },
}
