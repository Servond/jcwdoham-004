"use client";
import Link from "next/link";
import { useAuthStore } from "@/stores/authStore";

export default function Navbar() {
  const { email, logout, isLoggedIn } = useAuthStore();
  return (
    <div className="flex absolute top-0 justify-between h-[50px] w-full p-5">
      <Link href={"/"} className="text-4xl">
        LOGO
      </Link>
      <div className="flex gap-3">
        {isLoggedIn ? (
          <button onClick={logout}>Logout</button>
        ) : (
          <div className="flex gap-3">
            <Link href={"/login"}>
              <button>Login</button>
            </Link>
            <Link href={"/register"}>
              <button>Register</button>
            </Link>
          </div>
        )}

        <Link href={"/register/user"}>
          <button>{email}</button>
        </Link>
      </div>
    </div>
  );
}
