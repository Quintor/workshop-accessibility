module.exports = {
  verbose: true,
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["./jest.setup.js"],
  testMatch: ["**/?(*.)+(spec|test).[jt]s?(x)"],
  moduleFileExtensions: ["js", "jsx", "json", "node"],
};
