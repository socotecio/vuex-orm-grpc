
module.exports = {
  preset: 'ts-jest',
  transform:  {
    "\\.(ts)$": "ts-jest"
  },
  setupFilesAfterEnv: ["<rootDir>/test/setupTests.ts"],
}