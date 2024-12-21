// jest.env.mjs

import { loadEnv } from 'vite';
import { Buffer } from 'buffer';
import dotenv from 'dotenv';

// Polyfill para o Buffer
global.Buffer = Buffer;

// Carrega variáveis de ambiente do Vite
const viteEnv = loadEnv('test', process.cwd());

// Carrega variáveis de ambiente padrão do React (.env)
dotenv.config();

// Simula o comportamento de import.meta.env
global.importMeta = {
  env: {
    ...process.env, // Inclui REACT_APP_* e outras do .env padrão
    ...viteEnv, // Inclui variáveis do Vite
  },
};
