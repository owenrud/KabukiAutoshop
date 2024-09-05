/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind")
module.exports = {
  content: [
    "./node_modules/flowbite/**/*.js",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        color:{
          'primary':'#d90429',
          'white':'#F4F2F1',
          'secondary':'#030707',
        }
      },
      screens: {
        '3xl': '1600px',
      },

    },
  },
  plugins: [require('flowbite/plugin')],
};
