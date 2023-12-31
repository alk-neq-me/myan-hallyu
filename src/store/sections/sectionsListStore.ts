import { action, computed, makeObservable, observable } from "mobx"
import { persist } from "mobx-persist"
import { SectionsStore } from "./sectionsStore"

export class SectionsListStore {
  @persist("list")
  row: Array<SectionsStore> = []
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

      info_row: computed,
    })
  }

  get info_row() {
    return this.row.slice(0, 3)
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
    this.makeIdle()
    const list: Array<SectionsStore> = require("@data/section.json").content
    this.row = list
  }
}
