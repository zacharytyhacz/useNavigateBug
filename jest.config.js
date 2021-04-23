module.exports = {
    // The root of your source code, typically /src
    // `<rootDir>` is a token Jest substitutes
    roots: ["."],

    // Jest transformations -- this adds support for TypeScript
    // using ts-jest
    transform: {
        "^.+\\.tsx?$": "ts-jest",
    },

    // Runs special logic, such as cleaning up components
    // when using React Testing Library and adds special
    // extended assertions to Jest
    // setupFilesAfterEnv: [
    //  "@testing-library/react/cleanup-after-each",
    //  "@testing-library/jest-dom/extend-expect"
    // ],
    setupFilesAfterEnv: ['<rootDir>/tests/setupTests.ts'],

    moduleNameMapper: {
        "\\.(css|scss)$": "<rootDir>/tests/styleMock.js",
        "react-select-search(.*)": "<rootDir>/tests/styleMock.js",
        "^[./a-zA-Z0-9$_-]+\\.png$": "<rootDir>/tests/styleMock.js",
        "^[./a-zA-Z0-9$_-]+\\.svg$": "<rootDir>/tests/styleMock.js",
    },
    // Test spec file resolution pattern
    // Matches parent folder `__tests__` and filename
    // should contain `test` or `spec`.
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",

    // Module file extensions for importing
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};
