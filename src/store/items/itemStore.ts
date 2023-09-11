import { action, makeObservable, observable } from 'mobx'
import uuid from 'react-native-uuid'

export class ItemStore implements List {
  id: string = uuid.v1().toString()
  korean: string = ""
  romaji: string = ""
  meaning: string = ""
  sound: string = ""
  record?: string | null = null
  section_id: string = ""

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
