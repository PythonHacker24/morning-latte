import type { NextApiRequest, NextApiResponse } from "next";
import cookie from "cookie";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  const { token } = req.body;

  if (!token) {
    return res.status(400).json({ error: "No token provided" });
  }

  res.setHeader(
    "Set-Cookie",
    cookie.serialize("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      /* set age here */
      maxAge: 60 * 60 * 24 * 5, 
      path: "/",
      sameSite: "lax",
    })
  );

  res.status(200).json({ status: "success" });
}