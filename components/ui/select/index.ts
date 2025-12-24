import { SelectRoot } from "./select-root";
import { SelectTrigger } from "./select-trigger";
import { SelectList } from "./select-list";
import { SelectItem } from "./select-item";

export const Select = Object.assign(SelectRoot, {
  Provider: SelectRoot,
  Trigger: SelectTrigger,
  List: SelectList,
  Item: SelectItem,
});

export { SelectRoot, SelectTrigger, SelectList, SelectItem };
