// jest.config.js

const { loadEnv } = require('vite');

  module.exports = {
	testEnvironment: 'node',
	transform: {
	  '^.+\\.tsx?$': 'ts-jest',
	},
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
	setupFiles: ['./jest.env.js'], // Adiciona o ambiente do Vite
	moduleNameMapper: {
	  '^@/(.*)$': '<rootDir>/src/$1', // Mapear aliases do Vite
	},
  };
