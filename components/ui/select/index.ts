import { SelectRoot } from "./select-root";
import { SelectTrigger } from "./select-trigger";
import { SelectLabel } from "./select-label";
import { SelectList } from "./select-list";
import { SelectItem } from "./select-item";

export const Select = Object.assign(SelectRoot, {
  Provider: SelectRoot,
  Trigger: SelectTrigger,
  Label: SelectLabel,
  List: SelectList,
  Item: SelectItem,
});

export { SelectRoot, SelectTrigger, SelectLabel, SelectList, SelectItem };
