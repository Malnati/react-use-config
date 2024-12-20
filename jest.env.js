// jest.env.js

import { loadEnv } from 'vite';
import { Buffer } from 'buffer';

// Polyfill para garantir compatibilidade
global.Buffer = Buffer;

// Carrega todas as variáveis de ambiente do Vite (baseado no modo "test")
const env = loadEnv('test', process.cwd());

// Simula o comportamento de `import.meta.env` dinamicamente
global.importMeta = {
  env: {
    ...env, // Carrega automaticamente todas as variáveis do `.env` e arquivos do Vite
  },
};
