import IDecorator from './decorators/IDecorator'

export default class ApiDecoratorService {
  public static getInstance(): ApiDecoratorService {
    if (!this.instance) {
      this.instance = new ApiDecoratorService()
    }

    return this.instance
  }

  protected static instance: ApiDecoratorService

  protected decorators: IDecorator[]

  protected constructor() {
    this.decorators = new Array()
  }

  public setDecorators(decorators: IDecorator[]) {
    this.decorators = decorators
  }

  public apply<APIClass>(api: any): APIClass {
    if (this.decorators.length > 0) {
      const clientPrototype = Object.getPrototypeOf(api)
      const methodsNamesToPatch = Object.getOwnPropertyNames(clientPrototype)
      const constructorIndex = methodsNamesToPatch.indexOf('constructor')

      if (constructorIndex !== -1) {
        methodsNamesToPatch.splice(constructorIndex, 1)
      }

      methodsNamesToPatch.forEach((methodName) => {
        let patchedMethod = clientPrototype[methodName].bind(api)
        for (const decorator of this.decorators) {
          patchedMethod = decorator.decorate(patchedMethod)
        }

        api[methodName] = patchedMethod
      })

      return api
    }

    return api
  }

  public applyToMethod(method: any): any {
    for (const decorator of this.decorators) {
      method = decorator.decorate(method)
    }

    return method
  }
}
