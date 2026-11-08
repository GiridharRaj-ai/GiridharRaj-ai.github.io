/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0F0E0C",
        paper: "#FFFFFF",
        subtle: "#F7F6F2",
        secondary: "#6B6760",
        muted: "#A8A49F",
        line: "#E8E6E1",
      },
      fontFamily: {
        display: ["Manrope", "ui-sans-serif", "sans-serif"],
        sans: ['"DM Sans"', "ui-sans-serif", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      maxWidth: {
        container: "1200px",
      },
      borderRadius: {
        card: "12px",
        btn: "8px",
      },
      boxShadow: {
        card: "0 1px 3px rgba(0,0,0,0.05), 0 1px 2px rgba(0,0,0,0.04)",
        lift: "0 6px 20px rgba(0,0,0,0.08)",
        panel: "0 8px 30px rgba(0,0,0,0.09)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "none" },
        },
        float: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-6px)" },
        },
      },
      animation: {
        marquee: "marquee 36s linear infinite",
        fadeUp: "fadeUp 0.55s ease both",
        float: "float 5s ease-in-out infinite alternate",
      },
    },
  },
  plugins: [],
};
