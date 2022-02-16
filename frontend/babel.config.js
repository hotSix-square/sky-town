module.exports = {
  presets: [
    [
      "@vue/app",
      {
        useBuiltlns: "entry",
      },
      "@vue/cli-plugin-babel/preset",
    ],
  ],
  plugins: [
    [
      "component",
      {
        libraryName: "element-ui",
        styleLibraryName: "theme-chalk",
      },
    ],
  ],
};
