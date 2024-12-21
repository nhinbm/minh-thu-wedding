import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        "-50p": "-50%",
        "-40p": "-40%",
        "-30p": "-30%",
        "-20p": "-20%",
        "-10p": "-10%",
        "10p": "10%",
        "20p": "20%",
        "30p": "30%",
        "40p": "40%",
        "50p": "50%",
      },
      colors: {
        maroon: "#800000",
        beige: "#C8A898",
      },
    },
  },
  plugins: [],
} satisfies Config;
