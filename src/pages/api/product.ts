/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { db } from "@/server/db";
import { type NextApiHandler } from "next";

const handler: NextApiHandler = async (req, res) => {
  if (req.method === "GET") {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const id = req.query.id;
    console.log(id);
    try {
      const products = await db.product.findUnique({
        select: {
          currency: true,
          id: true,
          image: true,
          name: true,
          price: true,
        },
        where: {
          id: id as string,
        },
      });

      return res.status(200).json(products);
    } catch (err) {
      return res.status(500).json(err);
    }
  }

  return;
};

export default handler;
