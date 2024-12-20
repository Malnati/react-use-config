// jest.env.mjs

import { loadEnv } from 'vite';
import { Buffer } from 'buffer';

// Polyfill para o Buffer
global.Buffer = Buffer;

// Carrega todas as variáveis de ambiente do Vite
const env = loadEnv('test', process.cwd());

// Simula o comportamento de `import.meta.env`
global.importMeta = {
  env: {
    ...env,
  },
};
