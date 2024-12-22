// jest.env.js

const dotenv = require('dotenv');
const { Buffer } = require('buffer');

// Polyfill para o Buffer
global.Buffer = Buffer;

// Carrega variáveis de ambiente padrão do React (.env)
dotenv.config({ path: '.env' });

// Carrega variáveis de ambiente específicas de teste
dotenv.config({ path: '.env.test' });

// Simula o comportamento de import.meta.env
global.importMeta = {
  env: {
    ...process.env, // Inclui todas as variáveis carregadas
  },
};
