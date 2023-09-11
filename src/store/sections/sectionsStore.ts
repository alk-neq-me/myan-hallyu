import {  makeObservable, observable } from 'mobx'

export class SectionsStore implements Section {
  id: string = ""
  name: string = ""

  constructor() {
    makeObservable(this, {
      id: observable,
      name: observable,
    }) 
  }
}

