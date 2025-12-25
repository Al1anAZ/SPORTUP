import { useCallback } from "react";

type UseRovingFocusOptions<T extends HTMLElement> = {
  refs: React.RefObject<T>[];
  active?: boolean;
  loop?: boolean;
  onSelect?: (index: number) => void;
  onEscape?: () => void;
};

export function useRovingFocus<T extends HTMLElement>({
  refs,
  active = true,
  loop = true,
  onSelect,
  onEscape,
}: UseRovingFocusOptions<T>) {
  return useCallback(
    (e: React.KeyboardEvent) => {
      if (!active || refs.length === 0) return;

      const currentIndex = refs.findIndex(
        (ref) => ref.current === document.activeElement
      );
      const lastIndex = refs.length - 1;

      const focusAt = (index: number) => {
        refs[index]?.current?.focus();
      };

      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          focusAt(
            currentIndex === -1
              ? 0
              : loop
              ? (currentIndex + 1) % refs.length
              : Math.min(currentIndex + 1, lastIndex)
          );
          break;

        case "ArrowUp":
          e.preventDefault();
          focusAt(
            currentIndex === -1
              ? lastIndex
              : loop
              ? (currentIndex - 1 + refs.length) % refs.length
              : Math.max(currentIndex - 1, 0)
          );
          break;

        case "Home":
          e.preventDefault();
          focusAt(0);
          break;

        case "End":
          e.preventDefault();
          focusAt(lastIndex);
          break;

        case "Enter":
        case " ":
          if (currentIndex >= 0) {
            e.preventDefault();
            onSelect?.(currentIndex);
          }
          break;

        case "Escape":
          e.preventDefault();
          onEscape?.();
          break;
      }
    },
    [refs, active, loop, onSelect, onEscape]
  );
}
