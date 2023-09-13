import { action, makeObservable, observable } from 'mobx'

export class ItemStore implements List {
  id: string = ""
  korean: string = ""
  romaji: string = ""
  meaning: string = ""
  sound: string = ""
  record?: string | null = null
  section_id: string = ""
  isLiked: boolean = false

  constructor() {
    makeObservable(this, {
      id: observable,
      korean: observable,
      romaji: observable,
      meaning: observable,
      sound: observable,
      record: observable,
      section_id: observable,
      create: action
    })
  }

  create(props: List) {
    Object.keys(props).map(key => {
      // @ts-ignore
      this[key] = props[key]
    })
  }
}
