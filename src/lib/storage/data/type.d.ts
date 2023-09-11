interface Section {
  id: string
  name: string  // speaking, basic, alphabet, grammar, ...
}

interface List {
  id: string
  korean: string
  romaji: string
  meaning: string
  sound: string | null  // Currently not available
  record?: string | null
  section_id: string
}

interface Favorite {
  id: string
  list_id: string
  list: List
}

interface Music {
  id: string
  title: string
  description: string
  download_id?: string  // state for downloaded or not
  state: "play" | "pause" | "stop"
}

interface Downloaded {
  id: string
  list: Music[]
}
