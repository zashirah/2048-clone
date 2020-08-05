module.exports = {
  purge: [],
  theme: {
    height: (theme) => ({
      auto: "auto",
      ...theme("spacing"),
      full: "100%",
      screen: "100vh",
      screen95: "95vh",
    }),
    extend: {
      spacing: {
        "72": "18rem",
        "14": "3.5rem",
      },
      // height: (theme) => ({
      //   ...theme("spacing"),
      //   screen95: "95vh",
      // }),
    },
  },
  variants: {},
  plugins: [],
};
