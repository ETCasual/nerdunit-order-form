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
    // change to order
    try {
      const order = await db.order.findUnique({
        select: {
          id: true,
          name: true,
          form: {
            select: {
              form_input: {
                select: {
                  product: {
                    select: {
                      id: true,
                      image: true,
                      retail_price: true,
                      wholesale_price: true,
                      name: true,
                    },
                  },
                },
              },
            },
          },
        },
        where: {
          id: id as string,
        },
      });

      return res.status(200).json(order);
    } catch (err) {
      return res.status(500).json(err);
    }
  }

  //   if (req.method === "POST") {
  //     // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  //     const { name, products } = JSON.parse(req.body) as {
  //       name: string;
  //       products: string[];
  //     };

  //     try {
  //       const orders = await db.order.create({
  //         select: {
  //           id: true,
  //         },
  //         data: {
  //           name: name,
  //           status: "Sent",
  //           form: {
  //             create: {
  //               form_input: {
  //                 createMany: {
  //                   data: products.map((pro) => {
  //                     return {
  //                       productId: pro,
  //                       quantity: 0,
  //                     };
  //                   }),
  //                 },
  //               },
  //             },
  //           },
  //         },
  //       });

  //       console.log(orders);
  //       return res.status(200).json(orders);
  //     } catch (err) {
  //       return res.status(500).json(err);
  //     }
  //   }

  return res.status(400).end("Method Not Implemented");
};

export default handler;
