import { AccordionContent } from "./accordion-content";
import { AccordionItem } from "./accordion-item";
import { AccordionRoot } from "./accordion-root";
import { AccordionTrigger } from "./accordion-trigger";

export const Accordion = Object.assign(AccordionRoot, {
  Content: AccordionContent,
  Trigger: AccordionTrigger,
  Item: AccordionItem,
});

export { AccordionRoot, AccordionContent, AccordionTrigger, AccordionItem };
