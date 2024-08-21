import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function PoemsDetail() {
  const router = useRouter();
  const { poemId } = router.query;

  const [poem, setPoem] = useState<any>(null);

  useEffect(() => {
    const fetchPoemDetail = async () => {
      const { data } = await axios.get("/api/poems/" + poemId);
      console.log(data);
      setPoem(data);
    };
    fetchPoemDetail();
  }, [poemId]);

  return (
    <div>
      <h1>{poem?.title}</h1>
      <span>
        {poem?.type} · {poem?.author}
      </span>
      <p>{poem?.contents}</p>
    </div>
  );
}
