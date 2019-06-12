module.exports = {
  transform: {
    '^.+\\.tsx?$': 'babel-jest'
  },
  testRegex: 'test.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '^app/(.*)': '<rootDir>/src/app/$1',
    '^assets/(.*)': '<rootDir>/src/assets/$1',
    '^config/(.*)': '<rootDir>/src/config/$1',
    '^gateways/(.*)': '<rootDir>/src/gateways/$1',
    '^helpers/(.*)': '<rootDir>/src/helpers/$1',
    '^styles/(.*)': '<rootDir>/src/styles/$1'
  }
}
