module.exports = { 
  "transform": {
    ".(ts|tsx)": "ts-jest"
  },
  "testRegex": "/__tests__/[a-zA-Z0-9]*/.*\\.(test|spec)\\.(ts|tsx|js)$",
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js"
  ],
  "coveragePathIgnorePatterns": [
    "/node_modules/",
    "/test/"
  ],
  "coverageThreshold": {
    "global": {
      "branches": 40,
      "functions": 50,
      "lines": 70,
      "statements": 50
    }
  },
  "collectCoverage": true
};