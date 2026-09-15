module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    testMatch: ["**/*.test.ts"],
    collectCoverageFrom: [
        "src/**/*.ts",
        "!src/server.ts",
    ]
};
// 'preset: "ts-jest"': use ts-jest preset to handle TS files
// 'testEnvironment: "node"': set environment to Node.js