"use client";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [count, setCount] = useState<number>(0);
  return (
    <div className="mt-[80px]">
      <h1>ini layout register, count: {count}</h1>
      <Dialog>
        <DialogTrigger>Open Form</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      {children}
    </div>
  );
}
