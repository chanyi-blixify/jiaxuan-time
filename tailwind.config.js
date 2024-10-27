module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  compilerOptions: {
    // Other configuration...
    typeRoots: ["./src/declarations.d.ts"],
  },
};
