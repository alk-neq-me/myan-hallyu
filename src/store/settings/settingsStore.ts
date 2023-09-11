import { action, makeObservable, observable } from "mobx";
import { persist } from "mobx-persist";

export class SettingsStore {
  @persist
  doneInit: boolean = false
  showRomaji: boolean = true

  constructor() {
    makeObservable(this, {
      doneInit: observable,
      showRomaji: observable,

      makeDoneInit: action,
      reset: action
    })
  }

  makeDoneInit = () => {
    this.doneInit = true
  }

  reset = () => {
    this.doneInit = false
  }
}
