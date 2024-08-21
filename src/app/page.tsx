"use client";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [poems, setPoems] = useState([]);
  useEffect(() => {
    const fetchPoems = async () => {
      const { data } = await axios.get("/api/poems");
      console.log(data);
      setPoems(data);
    };
    fetchPoems();
  }, []);
  return (
    <main>
      {poems.map((item: any) => (
        <div key={item.id}>
          <Link as={`/poems/${item.id}`} href="/poems/[poemId]">
            <h1>{item.title}</h1>
          </Link>
          <span>
            {item.type} · {item.author}
          </span>
        </div>
      ))}
    </main>
  );
}
