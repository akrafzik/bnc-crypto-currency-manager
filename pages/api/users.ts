import type { NextApiRequest, NextApiResponse } from "next";
import type { User } from "../../interfaces";
import createLog from "../../helpers/loggly";
// Fake users data
const users: User[] = [{ id: 1 }, { id: 2 }, { id: 3 }];

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  await createLog("info", { name: 'alec', users });
  res.status(200).json(users);
}
