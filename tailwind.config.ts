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
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          50: "#EFF6FF",
          100: "#DBEAFE",
          200: "#BFDBFE",
          500: "#3B82F6",
          600: "#2563EB",
          700: "#1D4ED8",
          800: "#1E40AF",
          900: "#1E3A8A",
        },
        surface: {
          50: "#FFFFFF",
          100: "#F8FAFC",
          200: "#F1F5F9",
          300: "#E2E8F0",
          400: "#CBD5E1",
          500: "#94A3B8",
          600: "#64748B",
          700: "#334155",
          800: "#1E293B",
          900: "#0F172A",
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-outfit)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        'card': '0 2px 8px -2px rgba(15, 23, 42, 0.06), 0 4px 16px -4px rgba(15, 23, 42, 0.04)',
        'card-hover': '0 8px 24px -4px rgba(15, 23, 42, 0.08), 0 4px 12px -2px rgba(15, 23, 42, 0.04)',
        'elevated': '0 12px 32px -4px rgba(15, 23, 42, 0.12)',
      },
    },
  },
  plugins: [],
};
export default config;
