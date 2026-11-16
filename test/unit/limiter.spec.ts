import { Client, DEFAULT_LIMITER_OPTIONS } from '../../index'

const RESERVOIR_LIMITER_OPTIONS = {
  ...DEFAULT_LIMITER_OPTIONS,
  reservoir: 99,
  reservoirRefreshAmount: 99,
  reservoirRefreshInterval: 10000,
}

describe('Client limiter', () => {
  let setIntervalSpy: jasmine.Spy

  beforeEach(() => {
    setIntervalSpy = spyOn(global, 'setInterval').and.callThrough()
  })

  it('does not start a new reservoir interval when the credentials change', () => {
    const client = new Client({ accessToken: 'token-0', limiterOptions: RESERVOIR_LIMITER_OPTIONS })

    for (let index = 1; index <= 10; index++) {
      client.setAccessToken(`token-${index}`)
      client.setApiKey(`api-key-${index}`)
      client.setDeveloperApiKey(`developer-api-key-${index}`)
    }

    expect(setIntervalSpy).toHaveBeenCalledTimes(1)
  })

  it('creates a new limiter when the limiter options change', () => {
    const client = new Client({ accessToken: 'token', limiterOptions: RESERVOIR_LIMITER_OPTIONS })

    client.config.limiterOptions = { ...RESERVOIR_LIMITER_OPTIONS, reservoir: 50 }
    client.init()

    expect(setIntervalSpy).toHaveBeenCalledTimes(2)
  })
})
