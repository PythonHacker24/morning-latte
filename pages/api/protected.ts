import type { NextApiRequest, NextApiResponse } from "next";
import admin from "../../lib/firebaseAdmin";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const authHeader = req.headers.authorization;
  const token = authHeader?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "No token provided" });
  }

  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
    return res.status(200).json({ uid: decodedToken.uid });
  } catch (err) {
    console.error(err);
    return res.status(401).json({ error: "Invalid token" });
  }
}