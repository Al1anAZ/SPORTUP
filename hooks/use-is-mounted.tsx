"use client";
import { useState, useEffect } from "react";

export default function useIsMounted() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);  
  return mounted;
}
