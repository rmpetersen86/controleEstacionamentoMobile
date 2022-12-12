/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.tsx", "./src/screens/*.tsx", "./src/components/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        Rubik400: ["Rubik_400Regular"],
        Rubik500: ["Rubik_500Medium"],
        Rubik700: ["Rubik_700Bold"]
      }
    },
  },
  plugins: [],
}
