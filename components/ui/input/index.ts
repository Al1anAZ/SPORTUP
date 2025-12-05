import { InputRoot } from "./input-root";
import { InputField } from "./input-field";
import { InputLabel } from "./input-label";
import { InputHint } from "./input-hint";
import { InputError } from "./input-error";
import { InputRightSlot } from "./input-right-slot";
import { InputPasswordToggle } from "./input-password-toggle";

export const Input = Object.assign(InputRoot, {
  Provider: InputRoot,
  Field: InputField,
  Label: InputLabel,
  Hint: InputHint,
  Error: InputError,
  RightSlot: InputRightSlot,
  PasswordToggle: InputPasswordToggle,
});

export {
  InputRoot,
  InputField,
  InputLabel,
  InputHint,
  InputError,
  InputRightSlot,
  InputPasswordToggle,
};
