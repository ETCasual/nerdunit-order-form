import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        interstate: ["Interstate", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
