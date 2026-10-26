import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        burgundy: {
          DEFAULT: "#571E2C",
          50: "#FBF5F6",
          100: "#F5E8EB",
          200: "#E9CDD4",
          300: "#D7A7B3",
          400: "#C0768A",
          500: "#9E4760",
          600: "#7A2B3D",
          700: "#571E2C",
          800: "#3D131E",
          900: "#260B12",
        },
        gold: {
          DEFAULT: "#C7A76C",
          50: "#FAF7EE",
          100: "#F3ECD7",
          200: "#E7D8AF",
          300: "#DBC487",
          400: "#C7A76C",
          500: "#B28F4E",
          600: "#947239",
          700: "#735529",
          800: "#573F20",
          900: "#3E2C17",
        },
        ivory: {
          DEFAULT: "#FAF7F2",
          50: "#FFFFFF",
          100: "#FAF7F2",
          200: "#F3ECE0",
          300: "#EBE0CD",
          400: "#DFCEB4",
        },
        beige: {
          DEFAULT: "#EDE6DC",
          50: "#F9F7F4",
          100: "#EDE6DC",
          200: "#DDD2C2",
          300: "#CABEAA",
          400: "#B5A790",
        },
        charcoal: {
          DEFAULT: "#242327",
          50: "#98949E",
          100: "#75727C",
          200: "#55525B",
          300: "#3D3B42",
          400: "#2E2D32",
          500: "#242327",
          600: "#1C1B1E",
          700: "#151417",
          800: "#0E0E10",
          900: "#080709",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Playfair Display", "Cormorant Garamond", "serif"],
        sans: ["var(--font-sans)", "Inter", "Manrope", "sans-serif"],
        ethiopic: ["var(--font-ethiopic)", "Noto Sans Ethiopic", "sans-serif"],
      },
      boxShadow: {
        subtle: "0 2px 10px rgba(36, 35, 39, 0.04)",
        card: "0 10px 30px -5px rgba(36, 35, 39, 0.08)",
        floating: "0 20px 40px -10px rgba(87, 30, 44, 0.15)",
        gold: "0 8px 24px -4px rgba(199, 167, 108, 0.25)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
