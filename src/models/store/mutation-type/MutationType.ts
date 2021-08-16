// group our constants in a namespace
import { ItemsMutationType } from '../items/ItemsMutationType'

export namespace MutationType {
  export const items = ItemsMutationType
  // as you add new state modules, add additional exports here following the same convention
}