import { POEMS } from "@/fixture/poem";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const { poemId } = req.query;
    if (!!poemId) {
      return res.status(200).json(POEMS[+poemId - 1]);
    }
    return res.status(404).json({});
  }
}
