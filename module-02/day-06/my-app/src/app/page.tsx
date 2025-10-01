"use client";

import { useRouter } from "next/navigation";
import { useAuthStore } from "@/stores/authStore";

export default function Home() {
  const { isLoggedIn } = useAuthStore();
  const router = useRouter();

  const checkLogin = () => {
    if (isLoggedIn) {
      alert("barang dimasukan ke keranjang");
    } else {
      router.push("/login");
    }
  };
  return (
    <div className="mt-[80px]">
      <div>INI CERITANYA PRODUCT</div>
      <button onClick={checkLogin}>MASUKAN KE KERANJANG</button>
    </div>
  );
}
