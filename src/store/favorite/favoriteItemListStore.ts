import { action, makeObservable, observable } from "mobx"
import { persist } from "mobx-persist"
import { ItemStore } from "../items/itemStore"

export class FavoriteItemListStore {
  @persist("list")
  row: Array<ItemStore> = []
  loading: boolean = false

  constructor() {
    makeObservable(this, {
      row: observable,
      loading: observable,

      toggleFavorite: action,
      reset: action,
      findFavoritebyId: action
    })
  }

  reset = () => {
    this.row = []
    this.loading = false
  }

  toggleFavorite = (list: ItemStore) => {
    this.loading = true
    if (list.isLiked) {
      list.isLiked = false
      const idx = this.row.findIndex(i => i.id === list.id)
      this.row.splice(idx, 1)
    } else { 
      list.isLiked = true
      this.row.push(list) 
    }
    this.loading = false
  }

  findFavoritebyId = (id: string) => {
    return this.row.find(i => i.id === id)?.id
  }
}
