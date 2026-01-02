import type { Config } from "tailwindcss";

export default {
  theme: {
    extend: {
      screens: {
        "h-md": { raw: "(min-height: 768px)" },
      },
      backgroundImage: {
        "split-black-primary":
          "linear-gradient(to bottom, theme(colors.black) 0%, theme(colors.black) 50%, theme(colors.primary) 50%, theme(colors.primary) 100%)",
      },
      colors: {
        primary: "#0ba1ae",
        black: "#202222",
        lightgrey: "#99a0a2",
        darkgrey: "#5c6161",
      },
      fontFamily: {
        sans: ["Roboto", "ui-sans-serif", "system-ui"],
        bubblegum: ["'Bubblegum Sans'", "cursive"],
      },
    },
  },
} satisfies Config;
