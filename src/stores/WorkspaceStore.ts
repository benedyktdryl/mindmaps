import {
  observable,
  action,
  computed,
  IObservableArray,
  IObservableValue,
} from 'mobx';

import { mappers } from '../mappers';
import { DIAGRAM_TYPES } from '../utils/consts';

export class WorkspaceStore {
  type: IObservableValue<DIAGRAM_TYPES> = observable.box(
    DIAGRAM_TYPES.FLOWCHART,
  );

  items: IObservableArray<Item> = observable([]);

  setType = action((type: DIAGRAM_TYPES) => {
    this.type.set(type);
  });

  removeItem = action((item: Item) => {
    this.items.remove(item);
  });

  addItem = action((item: Item) => {
    this.items.push(item);
  });

  mapper = computed(() => {
    return mappers[this.type.get()];
  });

  snapshot = computed(() => {
    return this.items.map(this.mapper.get());
  });
}
