import { spawnSync } from 'node:child_process'
import * as path from 'node:path'

describe('API error stacks', () => {
  for (const { description, config } of [
    { description: 'without decorators', config: {} },
    { description: 'with the retry decorator', config: { numberOfApiCallRetries: 2 } },
  ]) {
    it(`preserves the application caller ${description}`, () => {
      const result = spawnSync(
        process.execPath,
        [
          path.resolve(__dirname, '../fixtures/errorStack.js'),
          path.resolve(__dirname, '../../lib/index.js'),
          JSON.stringify(config),
        ],
        { encoding: 'utf8', timeout: 5000 },
      )

      expect(result.error).withContext(result.stderr).toBeUndefined()
      expect(result.signal).withContext(result.stderr).toBeNull()
      expect(result.status).withContext(result.stderr).toBe(0)
      if (result.error || result.signal || result.status !== 0) {
        return
      }

      const error = JSON.parse(result.stdout)
      expect(error.isApiException).toBeTrue()
      expect(error.code).toBe(400)
      expect(error.body).toEqual({
        status: 'error',
        message: 'Invalid search',
        correlationId: 'test-correlation-id',
      })
      expect(error.headers).toEqual({ 'content-type': 'application/json', 'x-request-id': 'test-request-id' })
      expect(error.requestCount).toBe(1)
      expect(error.stack).toMatch(/\bat async applicationCaller\b/)
      expect(error.stack).not.toContain('Generator.next')
    })
  }
})
