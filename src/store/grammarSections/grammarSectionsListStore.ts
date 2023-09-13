import { action, makeObservable, observable } from "mobx"
import { persist } from "mobx-persist"
import { GrammarSectionsStore } from "./grammarSectionsStore"

export class GrammarSectionsListStore {
  @persist("list")
  row: Array<GrammarSectionsStore> = []
  loading: boolean = false
  errors: Error[] = []

  constructor() {
    makeObservable(this, {
      row: observable,
      errors: observable,
      loading: observable,

      init: action,
      reset: action,
      makeIdle: action,
    })
  }

  reset = () => {
    this.row = []
    this.errors = []
  }

  makeIdle = () => {
    this.errors = []
    this.loading = false
  }

  /* Only run application setup */
  init = () => {
    const list: Array<GrammarSectionsStore> = [] // require("@data/section.json").content
    this.row = list
    this.makeIdle()
  }
}
