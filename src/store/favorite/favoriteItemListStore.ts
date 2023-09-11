import { action, makeObservable, observable } from "mobx"
import { persist } from "mobx-persist"
import { ItemStore } from "../items/itemStore"

export class FavoriteItemListStore {
  @persist("list")
  row: Array<ItemStore> = []
  errors: Error[] = []

  constructor() {
    makeObservable(this, {
      row: observable,
      errors: observable,

      toggleFavorite: action,
      reset: action,
      findFavoritebyId: action
    })
  }

  reset = () => {
    this.row = []
    this.errors = []
  }

  toggleFavorite = (list: ItemStore) => {
    const exists = this.row.findIndex(i => i.id === list.id)
    if (exists !== -1) { this.row.splice(exists, 1) }
    else { this.row.push(list) }

    this.errors = []
  }

  findFavoritebyId = (id: string) => {
    const exists = this.row.find(i => i.id === id)
    return exists?.id
  }
}
