// jest.config.js

import { loadEnv } from 'vite';

export default {
  testEnvironment: 'jest-environment-jsdom', // Simula o ambiente do navegador
  transform: {
    '^.+\\.tsx?$': 'ts-jest', // Usa o ts-jest para transformar TypeScript
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'], // Extensões suportadas
  setupFiles: ['./jest.env.mjs'], // Configuração para carregar variáveis de ambiente
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1', // Mapear aliases como no Vite
  },
};
