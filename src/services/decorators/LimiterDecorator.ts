import Bottleneck from 'bottleneck'
import IDecorator from './IDecorator'

export default class LimiterDecorator implements IDecorator {
  protected limiter: Bottleneck | undefined
  protected limiterJobOptions: Bottleneck.JobOptions

  public constructor(limiterOptions: Bottleneck.ConstructorOptions, limiterJobOptions: Bottleneck.JobOptions = {}) {
    this.limiter = new Bottleneck(limiterOptions)
    this.limiterJobOptions = limiterJobOptions
  }

  public decorate(method: any): (...args: any) => any {
    return (...args) => {
      if (!this.limiter) {
        throw new Error('Limiter not defined')
      }
      this.limiter.schedule(this.limiterJobOptions, () => method(...args))
    }
  }
}
