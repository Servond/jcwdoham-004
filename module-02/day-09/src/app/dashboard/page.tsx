"use client";

import axios from "axios";
import { useEffect, useState } from "react";

export default function dashboard() {
  const [data, setData] = useState<number[]>();
  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/data` as string
      );

      setData(data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      {data?.map((i, idx) => (
        <div key={idx}>{i}</div>
      ))}
    </div>
  );
}
