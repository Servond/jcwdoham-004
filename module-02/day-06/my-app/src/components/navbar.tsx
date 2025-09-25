import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex absolute top-0 justify-between h-[50px] w-full p-5">
      <Link href={"/"} className="text-4xl">
        LOGO
      </Link>
      <div className="flex gap-3">
        <Link href={"/login"}>
          <button>Login</button>
        </Link>
        <Link href={"/register"}>
          <button>Register</button>
        </Link>
      </div>
    </div>
  );
}
