// jest.config.js

const { defaults } = require('ts-jest/presets');

module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    ...defaults.transform,
  },
  transformIgnorePatterns: [
    '/node_modules/', // Ignorar transformações em node_modules
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFiles: ['./jest.env.js'], // Configuração para carregar variáveis de ambiente
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
};
