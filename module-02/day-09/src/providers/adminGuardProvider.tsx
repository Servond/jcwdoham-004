"use client";

import { useEffect } from "react";
import useAuthStore from "@/stores/authStore";
import { useRouter } from "next/navigation";

export default function AdminGuardProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isLoggedIn, role } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (role !== "admin") {
      router.push("/");
    }
  }, [isLoggedIn, role]);

  return <>{children}</>;
}
