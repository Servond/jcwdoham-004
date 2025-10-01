"use client";
import { useState } from "react";

export default function RegisterTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  const [count, setCount] = useState<number>(0);
  return (
    <div className="mt-[80px]">
      <h1>ini template register, count: {count}</h1>

      <button onClick={() => setCount(count + 1)}>Increment</button>
      {children}
    </div>
  );
}
