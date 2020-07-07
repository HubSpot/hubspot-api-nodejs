const _ = require('lodash')

const ENV_VARIABLES = {
    HUBSPOT_CLIENT_ID: process.env.HUBSPOT_CLIENT_ID,
    HUBSPOT_CLIENT_SECRET: process.env.HUBSPOT_CLIENT_SECRET,
    HUBSPOT_APPLICATION_ID: process.env.HUBSPOT_APPLICATION_ID,
    HUBSPOT_DEVELOPER_API_KEY: process.env.HUBSPOT_DEVELOPER_API_KEY,
    TRELLO_API_KEY: process.env.TRELLO_API_KEY,
}

module.exports = (req, res, next) => {
    if (_.startsWith(req.url, '/error')) return next()

    const notSetEnvVariables = []

    _.keys(ENV_VARIABLES).forEach((key) => {
        if (_.isNil(ENV_VARIABLES[key])) {
            notSetEnvVariables.push(key)
        }
    })

    if (!_.isEmpty(notSetEnvVariables)) {
        return res.redirect(
            `/error?msg=Please set ${notSetEnvVariables} env variable${
                notSetEnvVariables.length > 1 ? 's' : ''
            } to proceed`,
        )
    }

    next()
}
