const _ = require('lodash')
const hubspotOauthHelper = require('../helpers/hubspot-oauth-helper')
const trelloOauthHelper = require('../helpers/trello-oauth-helper')
const hubspotClientHelper = require('../helpers/hubspot-client-helper')

module.exports = async (req, res, next) => {
    if (_.startsWith(req.url, '/error')) {
        return next()
    }

    if (_.startsWith(req.url, '/oauth/login')) {
        return next()
    }

    const hubspotAuthorized = await hubspotOauthHelper.verifyAuthorization()

    if (!hubspotAuthorized) {
        return res.redirect('/oauth/login')
    }

    const hubspotTokenExpired = await hubspotOauthHelper.verifyTokenExpiration()

    if (hubspotTokenExpired) {
        const hubspotClient = await hubspotClientHelper.getClient()
        await hubspotOauthHelper.refreshToken(hubspotClient)
    }

    const trelloAuthorized = await trelloOauthHelper.verifyAuthorization()

    if (!trelloAuthorized) {
        return res.redirect('/oauth/login')
    }

    return next()
}
