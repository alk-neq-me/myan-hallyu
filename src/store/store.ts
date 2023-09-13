import AsyncStorage from '@react-native-async-storage/async-storage'
import { create } from 'mobx-persist'
import { ItemListStore } from './items/itemListStore'
// import { CounterStore } from './counterStore'
import { FavoriteItemListStore } from './favorite/favoriteItemListStore'
import { SettingsStore } from './settings/settingsStore'
import { error_expect } from '@/lib/error-handling'
import { SectionsListStore } from './sections/sectionsListStore'
import { GrammarListStore } from './grammar/grammarListStore'
import { GrammarSectionsListStore } from './grammarSections/grammarSectionsListStore'

const hydrate = create({ 
  storage: AsyncStorage,
  jsonify: true
})

export class RootStore {
  // counter = new CounterStore()
  listItem = new ItemListStore()
  favoriteItem = new FavoriteItemListStore()
  sections = new SectionsListStore()
  grammarSection = new GrammarSectionsListStore()
  grammars = new GrammarListStore()
  setting = new SettingsStore()

  constructor() {
    // hydrate("counter", this.counter).catch(error_expect("failed hydrate counter"))
    hydrate("list-item", this.listItem).catch(error_expect("failed hydrate listItem"))
    hydrate("favorite-list-item", this.favoriteItem).catch(error_expect("failed hydrate favoriteListItem"))
    hydrate("grammar-section", this.grammarSection).catch(error_expect("failed hydrate grammarSection"))
    hydrate("grammar-list", this.grammars).catch(error_expect("failed hydrate grammars"))
    hydrate("sections", this.sections).catch(error_expect("failed hydrate sections"))
    hydrate("settings", this.setting).catch(error_expect("failed hydrate settings"))
  }
}
