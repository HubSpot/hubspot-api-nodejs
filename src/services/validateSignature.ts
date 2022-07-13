import crypto = require('crypto')
import * as _ from 'lodash'

/**
 *
 * @deprecated
 */
export function validateSignature(
  signature: string,
  clientSecret: string,
  requestBody: string,
  signatureVersion = 'v1',
  webhooksUrl?: string,
  webhooksMethod = 'POST',
): boolean {
  const sourceString = _.isEqual(signatureVersion, 'v1')
    ? clientSecret + requestBody
    : clientSecret + webhooksMethod + webhooksUrl + requestBody

  const hash = crypto
    .createHash('sha256')
    .update(sourceString)
    .digest('hex')

  return _.isEqual(signature, hash)
}
