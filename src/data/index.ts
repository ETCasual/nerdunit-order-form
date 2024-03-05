type CollectionsData = Record<
  string,
  {
    id: number;
    products: Product[];
  }
>;

export type Product = {
  id: string;
  image: string;
  name: string;
  price: number;
  currency: string;
};

export const collectionData: CollectionsData = {
  "WINTER 2020 | MYR": {
    id: 1,
    products: [
      {
        currency: "USD",
        id: "NMB1658-30-002 WHITE",
        image:
          "https://d3k2yxl6efztlc.cloudfront.net/presentation/0000925693135597_M.jpg",
        name: `"HOMEY" CORDUROY JORGGER`,
        price: 39.5,
      },
      {
        currency: "USD",
        id: "NMBA525-30-032 DENIM BLUE",
        image:
          "https://d3k2yxl6efztlc.cloudfront.net/presentation/00009256898D33A6_M.jpg",
        name: `"EXPOSED" JEANS`,
        price: 41.5,
      },
    ],
  },
  "WINTER COLLECTION (MYR)": {
    id: 2,
    products: [
      {
        currency: "USD",
        id: "NMB8590-30-001 BLACK",
        image:
          "https://d3k2yxl6efztlc.cloudfront.net/presentation/00009256897E03D7_M.jpg",
        name: `"REFPIPE" PANTS`,
        price: 117.5,
      },
    ],
  },
};
