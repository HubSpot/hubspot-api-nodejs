import { Signature } from '../../index'

describe('Signature is valid', () => {
  it('Validates v1', () => {
    const options = {
      signature: '232db2615f3d666fe21a8ec971ac7b5402d33b9a925784df3ca654d05f4817de',
      clientSecret: 'yyyyyyyy-yyyy-yyyy-yyyy-yyyyyyyyyyyy',
      requestBody:
        '[{"eventId":1,"subscriptionId":12345,"portalId":62515,"occurredAt":1564113600000,"subscriptionType":"contact.creation","attemptNumber":0,"objectId":123,"changeSource":"CRM","changeFlag":"NEW","appId":54321}]',
    }

    expect(Signature.isValid(options)).toBe(false)
  })
  it('Validates v2', () => {
    const options = {
      signature: 'eee2dddcc73c94d699f5e395f4b9d454a069a6855fbfa152e91e88823087200e',
      clientSecret: 'yyyyyyyy-yyyy-yyyy-yyyy-yyyyyyyyyyyy',
      requestBody: '',
      url: 'https://www.example.com/webhook_uri',
      method: 'GET',
      signatureVersion: 'v2',
    }

    expect(Signature.isValid(options)).toBe(false)
  })
  it('Validates v2 with body', () => {
    const options = {
      signature: '9569219f8ba981ffa6f6f16aa0f48637d35d728c7e4d93d0d52efaa512af7900',
      clientSecret: 'yyyyyyyy-yyyy-yyyy-yyyy-yyyyyyyyyyyy',
      requestBody: '{"example_field":"example_value"}',
      url: 'https://www.example.com/webhook_uri',
      method: 'POST',
      signatureVersion: 'v2',
    }

    expect(Signature.isValid(options)).toBe(false)
  })
  it('Validates v3', async () => {
    const options = {
      signature: '',
      clientSecret: 'yyyyyyyy-yyyy-yyyy-yyyy-yyyyyyyyyyyy',
      requestBody: '{"example_field":"example_value"}',
      url: 'https://www.example.com/webhook_uri',
      method: 'POST',
      signatureVersion: 'v3',
      timestamp: Date.now(),
    }
    options.signature = Signature.getSignature(options.method, options.signatureVersion, options)

    expect(Signature.isValid(options)).toBe(false)
  })
})
