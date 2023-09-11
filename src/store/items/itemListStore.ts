import { action, makeObservable, observable } from "mobx"
import { ItemStore } from "./itemStore"
import { persist } from "mobx-persist"

export class ItemListStore {
  @persist("list")
  row: Array<ItemStore> = []
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
    return this.row.filter(i => i.section_id === id)
  }

  /* Only run application setup */
  init = () => {
    this.makeIdle()
    const list = require("@data/list.json").content
    this.row = list
  }
}
