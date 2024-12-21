// jest.env.mjs

import { loadEnv } from 'vite';
import { Buffer } from 'buffer';

// Polyfill para Buffer, necessário para compatibilidade com Node.js
global.Buffer = Buffer;

// Carregar variáveis do Vite
const viteEnv = loadEnv('test', process.cwd());

// Simular `import.meta.env` com as variáveis do Vite
global.importMeta = {
  env: {
    ...viteEnv, // Carregar variáveis do Vite
  },
};

// Simular REACT_APP variáveis para compatibilidade com React
Object.keys(viteEnv).forEach((key) => {
  if (key.startsWith('VITE_')) {
    const reactKey = key.replace('VITE_', 'REACT_APP_');
    process.env[reactKey] = viteEnv[key];
  }
});
