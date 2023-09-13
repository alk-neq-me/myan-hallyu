import { makeObservable, observable } from "mobx"

export type GrammarExample = Omit<List, "section_id" | "record" | "romaji">

export class GrammarStore {
  id: string = ""
  description: string = ""
  structure: string = ""
  examples: Array<GrammarExample> = []
  grammar_section_id: string = ""

  constructor() {
    makeObservable(this, {
      description: observable,
      structure: observable,
      examples: observable,
    })
  }
}
