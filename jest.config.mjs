// jest.config.js

import { defaults } from 'ts-jest/presets';

export default {
  testEnvironment: 'jest-environment-jsdom', // Simula o ambiente do navegador
  transform: {
    ...defaults.transform, // Usa transformações padrão do ts-jest
    '^.+\\.mjs$': 'babel-jest', // Transforma arquivos .mjs com babel-jest
  },
  transformIgnorePatterns: [
    '/node_modules/', // Ignora transformações em node_modules
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node', 'mjs'], // Extensões suportadas
  setupFiles: ['./jest.env.js'], // Configuração para carregar variáveis de ambiente
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1', // Mapear aliases como no Vite
  },
};
