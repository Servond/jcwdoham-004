import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex justify-between mx-12 h-10 p-3">
      <Link href={"/"}>
        <span className="text-2xl">LOGO</span>
      </Link>
      <div className="flex gap-5">{/* <Link></Link> */}</div>
      <div className="flex gap-5">
        <button>Login</button>
        <button>Register</button>
      </div>
    </div>
  );
}
