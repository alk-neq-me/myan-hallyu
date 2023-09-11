import { action, makeObservable, observable } from "mobx"
import { persist } from 'mobx-persist'

export class CounterStore {
  @persist
  value: number = 0

  constructor() {
    makeObservable(this, {
      value: observable,
      reset: action,
      increment: action,
    })
  }

  increment = () => {
    this.value += 1
  }

  reset = () => {
    this.value = 0
  }
}
