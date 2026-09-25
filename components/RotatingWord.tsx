"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

const defaultWords = ["Search", "Find", "Compare"];

type RotatingWordProps = {
  words?: string[];
  interval?: number;
};

export function RotatingWord({
  words = defaultWords,
  interval = 2200,
}: RotatingWordProps) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const [width, setWidth] = useState<number>();
  const wordRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const node = wordRef.current;
    if (node) {
      setWidth(node.offsetWidth);
    }
  }, [index, words]);

  useEffect(() => {
    let timeout = 0;
    const id = window.setInterval(() => {
      setVisible(false);
      timeout = window.setTimeout(() => {
        setIndex((current) => (current + 1) % words.length);
        setVisible(true);
      }, 220);
    }, interval);

    return () => {
      window.clearInterval(id);
      window.clearTimeout(timeout);
    };
  }, [interval, words.length]);

  return (
    <span className="rotating-word-wrap" style={width ? { width } : undefined}>
      <span
        ref={wordRef}
        className={visible ? "rotating-word is-in" : "rotating-word is-out"}
      >
        {words[index]}
      </span>
    </span>
  );
}
