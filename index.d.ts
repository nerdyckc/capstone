// import * as t from './types.d'

declare class Web3 {
  static providers: any
  static givenProvider: any
  static modules: {
    Eth: new (provider: any) => any
    Net: new (provider: any) => any
    Personal: new (provider: any) => any
    Shh: new (provider: any) => any
    Bzz: new (provider: any) => any
  }
  constructor(provider?: any | string)
  version: string
  BatchRequest: new () => any
  extend(methods: any): any // TODO
  bzz: any
  currentProvider: any
  eth: any
  ssh: any
  givenProvider: any
  providers: any
  setProvider(provider: any): void
  utils: any
}

export default Web3;
