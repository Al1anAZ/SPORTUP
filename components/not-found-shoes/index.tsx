"use client";
import { useEffect, useState } from "react";
import { ShouesNotFoundIcon } from "../icons";

export const NotFoundShoes = () => {
  const [count, setCount] = useState(1);
  const width = 466;

  useEffect(() => {
    const update = () => {
      const screenWidth = window.innerWidth;
      const needed = Math.ceil(screenWidth / width) + 2;
      setCount(needed);
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <div
      className="overflow-hidden flex"
      style={{
        width: "100vw",
        marginLeft: "50%",
        transform: "translateX(-50%)"
      }}
    >
      {Array.from({ length: count }, (_, i) => (
        <ShouesNotFoundIcon
          key={i}
          width={width}
          height={66}
          className="shrink-0"
        />
      ))}
    </div>
  );
};
