type CollectionsData = Record<
  string,
  {
    id: number;
    products: Product[];
  }
>;

export type Product = {
  image: string;
  id: string;
  name: string;
  retailPrice: number;
  wholesalePrice: number;
};

export const collectionData: CollectionsData = {
  "WINTER 2020 | MYR": {
    id: 1,
    products: [
      {
        id: "NMB1658-30-002_WHITE",
        image:
          "https://d3k2yxl6efztlc.cloudfront.net/presentation/0000925693135597_M.jpg",
        name: `"HOMEY" CORDUROY JORGGER`,
        retailPrice: 39.5,
        wholesalePrice: 40.5,
      },
      {
        id: "NMBA525-30-032_DENIM_BLUE",
        image:
          "https://d3k2yxl6efztlc.cloudfront.net/presentation/00009256898D33A6_M.jpg",
        name: `"EXPOSED" JEANS`,
        retailPrice: 41.5,
        wholesalePrice: 99,
      },
    ],
  },
  "WINTER COLLECTION (MYR)": {
    id: 2,
    products: [
      {
        id: "NMB8590-30-001_BLACK",
        image:
          "https://d3k2yxl6efztlc.cloudfront.net/presentation/00009256897E03D7_M.jpg",
        name: `"REFPIPE" PANTS`,
        wholesalePrice: 117.5,
        retailPrice: 15,
      },
    ],
  },
};

export const products = Object.values(collectionData)
  .map((cd) => cd.products.map((pro) => pro))
  .flat();
