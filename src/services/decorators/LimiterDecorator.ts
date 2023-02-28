import Bottleneck from 'bottleneck'
import IDecorator from './IDecorator'

export default class LimiterDecorator implements IDecorator {
  protected limiter: Bottleneck | undefined

  public constructor(limiterOptions: Bottleneck.ConstructorOptions) {
    this.limiter = new Bottleneck(limiterOptions)
  }

  public decorate(method: any): (...args: any) => any {
    if (!this.limiter) {
      throw new Error('Limiter not defined')
    }
    return this.limiter.wrap(method)
  }
}
