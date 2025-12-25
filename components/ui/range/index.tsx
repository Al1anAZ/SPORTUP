"use client";

import { useEffect, useState } from "react";
import { cn } from "../../../utils/cn";
import { Input } from "../input";

type RangeProps = {
  min: number;
  max: number;
  step?: number;
  value: [number, number];
  setRange: (value: [number, number]) => void;
};

export function Range({
  min,
  max,
  step = 1,
  value,
  setRange,
}: RangeProps) {
  const [local, setLocal] = useState<[number, number]>(value);
  const [from, to] = local;
  const left = ((from - min) / (max - min)) * 100;
  const right = ((to - min) / (max - min)) * 100;


  const updateLocal = (next: [number, number]) => {
    let [newFrom, newTo] = next;

    if (newFrom > newTo) newFrom = newTo;
    if (newTo < newFrom) newTo = newFrom;

    newFrom = Math.max(min, Math.min(newFrom, max));
    newTo = Math.max(min, Math.min(newTo, max));

    setLocal([newFrom, newTo]);
  };

  const commit = () => {
    setRange(local);
  };

  useEffect(() => {
    setLocal(value);
  }, [value]);
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="grid grid-cols-2 gap-4">
        <Input>
          <Input.Label>Min</Input.Label>
          <Input.Field
            type="number"
            value={from}
            min={min}
            max={max}
            step={step}
            onChange={(e) =>
              updateLocal([Number(e.target.value) || min, to])
            }
            onBlur={commit}
            className={inputClearAppearance}
          />
        </Input>

        <Input>
          <Input.Label>Max</Input.Label>
          <Input.Field
            type="number"
            value={to}
            min={min}
            max={max}
            step={step}
            onChange={(e) =>
              updateLocal([from, Number(e.target.value) || max])
            }
            onBlur={commit}
            className={inputClearAppearance}
          />
        </Input>
      </div>

      <div className="relative h-10 w-[calc(100%-16px)]">

        <div className="absolute top-1/4 h-[2px] w-full -translate-y-1/2 bg-[var(--color-gray-100)]" />

        <div
          className="absolute top-1/4 h-[2px] -translate-y-1/2 bg-[var(--color-blue)]"
          style={{ left: `${left}%`, width: `${right - left}%` }}
        />

        <Input className="relative">
          <Input.Field
            variant="default"
            type="range"
            min={min}
            max={max}
            step={step}
            value={from}
            onChange={(e) =>
              updateLocal([+e.target.value, to])
            }
            onMouseUp={commit}
            onTouchEnd={commit}
            className={rangeThumb}
            aria-label="Minimum value"
          />
          <Input.Label
            className="absolute top-6 text-sm"
            style={{
              left: `${left + 1.5}%`,
              transform: "translateX(-50%)",
            }}
          >
            {from}
          </Input.Label>
        </Input>

        <Input className="relative">
          <Input.Field
            variant="default"
            type="range"
            min={min}
            max={max}
            step={step}
            value={to}
            onChange={(e) =>
              updateLocal([from, +e.target.value])
            }
            onMouseUp={commit}
            onTouchEnd={commit}
            className={rangeThumb}
            aria-label="Maximum value"
          />
          <Input.Label
            className="absolute top-6 text-sm"
            style={{
              left: `${right - 1.5}%`,
              transform: "translateX(-50%)",
            }}
          >
            {to}
          </Input.Label>
        </Input>
      </div>
    </div>
  );
}


const inputClearAppearance =
  "appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-moz-appearance]:textfield";

const rangeThumb = cn(
  "pointer-events-none absolute inset-0 inset-y-2.5 appearance-none bg-transparent",
  "[&::-webkit-slider-thumb]:pointer-events-auto",
  "[&::-webkit-slider-thumb]:h-2 [&::-webkit-slider-thumb]:w-2",
  "[&::-webkit-slider-thumb]:rounded-full",
  "[&::-webkit-slider-thumb]:bg-[var(--color-blue)]",
  "[&::-webkit-slider-thumb]:border-gray-900",
  "[&::-webkit-slider-thumb]:appearance-none",
  "[&::-moz-range-thumb]:pointer-events-auto"
);
