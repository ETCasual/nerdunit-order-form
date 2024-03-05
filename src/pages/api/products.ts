/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { db } from "@/server/db";
import { type NextApiHandler } from "next";

const handler: NextApiHandler = async (req, res) => {
  if (req.method === "GET") {
    try {
      // const products = await db.cscart_products.findMany({
      //   select: {
      //     activation_date: true,
      //     age_limit: true,
      //     age_verification: true,
      //     amount: true,
      //     avail_since: true,
      //     china_barcode: true,
      //     color_relation_id: true,
      //     commodity_code: true,
      //     company_id: true,
      //     details_layout: true,
      //     edp_shipping: true,
      //     exceptions_type: true,
      //     feature_comparison: true,
      //     free_shipping: true,
      //     height: true,
      //     is_edp: true,
      //     is_op: true,
      //     is_oper: true,
      //     is_pbp: true,
      //     is_returnable: true,
      //     length: true,
      //     list_price: true,
      //     list_qty_count: true,
      //     localization: true,
      //     low_avail_limit: true,
      //     max_qty: true,
      //     min_qty: true,
      //     new_release: true,
      //     non_returnable: true,
      //     options_type: true,
      //     out_of_stock_actions: true,
      //     owner_id: true,
      //     position: true,
      //     product_code: true,
      //     product_id: true,
      //     product_type: true,
      //     qty_step: true,
      //     rack_cn: true,
      //     rack_gb: true,
      //     rack_ph: true,
      //     rack_us: true,
      //     return_period: true,
      //     shipping_freight: true,
      //     shipping_params: true,
      //     stamp_image: true,
      //     status: true,
      //     tax_ids: true,
      //     thumb: true,
      //     timestamp: true,
      //     tracking: true,
      //     type_relation: true,
      //     uk_shipping: true,
      //     unlimited_download: true,
      //     us_shipping: true,
      //     usergroup_ids: true,
      //     weight: true,
      //     width: true,
      //     zero_price_action: true,
      //   },
      // });

      const products = await db.product.findMany({
        select: {
          currency: true,
          id: true,
          image: true,
          name: true,
          price: true,
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
