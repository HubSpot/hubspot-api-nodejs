export default interface IDecorator {
  decorate(method: any): (...args: any) => any
}
