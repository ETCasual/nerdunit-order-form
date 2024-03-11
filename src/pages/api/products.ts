/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { products as seed } from "@/data";
import { db } from "@/server/db";
import { type NextApiHandler } from "next";

const handler: NextApiHandler = async (req, res) => {
  if (req.method === "POST") {
    try {
      const products = await db.product.createMany({
        data: seed.map((s) => {
          return {
            id: s.id,
            image: s.image,
            name: s.name,
            retail_price: s.retailPrice,
            wholesale_price: s.wholesalePrice,
          };
        }),
      });

      return res.status(200).json(products);
    } catch (err) {
      return res.status(500).json(err);
    }
  }

  return;
};

export default handler;
