// jest.config.js

import { loadEnv } from 'vite';

export default {
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFiles: ['./jest.env.mjs'], // Use o arquivo ESM para o ambiente
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
};
