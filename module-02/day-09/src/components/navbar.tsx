"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import useAuthStore from "@/stores/authStore";

export default function Navbar() {
  const { onLogout, isLoggedIn } = useAuthStore();
  const router = useRouter();

  return (
    <div className="flex justify-between px-12 py-3 items-center shadow-2xl">
      <Link href={"/"} className="text-2xl font-bold">
        My Blog
      </Link>
      <div className="flex gap-5">
        <Link href={"articles"} className="hover:text-green-500">
          Articles
        </Link>
        <Link
          href={isLoggedIn ? "/dashboard" : "/login"}
          className="hover:text-green-500"
        >
          Dashboard
        </Link>
      </div>
      {isLoggedIn ? (
        <div className="flex ">
          <button
            className="border-none  md:h-[35px] md:w-[80px] rounded-md bg-green-500 hover:bg-green-600 hover:cursor-pointer text-white"
            onClick={onLogout}
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="flex gap-5 items-center">
          <button
            className="border-none md:h-[35px] md:w-[80px] rounded-md bg-green-500 hover:bg-green-600 hover:cursor-pointer text-white"
            onClick={() => router.push("/login")}
          >
            Login
          </button>
          <button
            className="border-none  md:h-[35px] md:w-[80px] rounded-md bg-green-500 hover:bg-green-600 hover:cursor-pointer text-white"
            onClick={() => router.push("/register")}
          >
            Register
          </button>
        </div>
      )}
    </div>
  );
}
