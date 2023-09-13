import {  makeObservable, observable } from 'mobx'

export class GrammarSectionsStore implements Section {
  id: string = ""
  name: string = ""

  constructor() {
    makeObservable(this, {
      id: observable,
      name: observable,
    }) 
  }
}

