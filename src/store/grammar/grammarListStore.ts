import { action, makeObservable, observable } from "mobx"
import { persist } from "mobx-persist"
import { GrammarStore } from "./grammarStore"

export class GrammarListStore {
  @persist("list")
  row: Array<GrammarStore> = []
  loading: boolean = false
  errors: Error[] = []

  constructor() {
    makeObservable(this, {
      row: observable,
      errors: observable,
      loading: observable,

      init: action,
      reset: action,
      makeIdle: action
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

  loadBySectionId = (id: string) => {
    return this.row.filter(i => i.grammar_section_id === id)
  }

  /* Only run application setup */
  init = () => {
    this.makeIdle()
    const list: Array<GrammarStore> = [] // require("@data/list.json").content
    this.row = list
  }
}

