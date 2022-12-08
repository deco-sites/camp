/** @type {import('$fresh/plugins/twind').Options} */
export default {
  theme: {
    extend: {
      transitionProperty: {
        "height": "height",
      },

      animation: {
        wind: "wind 3s ease-in-out infinite",
      },

      keyframes: {
        wind: {
          "0%, 100%": { transform: "translateY(-25%)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },

      backgroundImage: {
        radial:
          "radial-gradient(circle closest-corner at 99.5%, var(--tw-gradient-from), var(--tw-gradient-to))",
      },
      colors: {
        primary: "#2FD180",
        "primary-dark": "#003232",
        "primary-darker": "#002020",
        "secondary-dark": "#113032",
        "primary-light": "#C5FFE9",
        "primary-green-light": "#2EAE80",
        "primary-green-dark": "#177151",
        "custom-brown": "#f8f5f1",
        "custom-gray": "#f4f4f4",
        "primary-red": "#D10923",
        "primary-red-light": "#DA262B",
        "primary-red-dark": "#A1061A",
        "deco-black": "#252525",
        "deco-light-gray": "#F4F4F4",
        "deco-medium-gray": "#DFDFDF",
        "deco-dark-gray": "#898989",
        "deco-bg-green": "#C5FFE9",
        "deco-medium-green": "#23AB6E",
        "deco-dark-green": "#113131",
      },
    },
    fontFamily: {
      sans: ["Albert Sans", "sans-serif"],
      serif: ["serif"],
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
};
