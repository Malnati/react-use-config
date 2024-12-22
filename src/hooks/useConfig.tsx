import { useSearchParams } from 'react-router-dom';

/**
 * Hook para recuperar um parâmetro de configuração seguindo a prioridade:
 * 1. Parâmetro de consulta (query parameter)
 * 2. Variável de ambiente (process.env)
 * 3. Valor padrão (default value)
 *
 * @param {string} paramName - O nome do parâmetro a ser recuperado.
 * @param {any} defaultValue - O valor padrão a ser usado se o parâmetro não for encontrado.
 * @returns {any} - O valor do parâmetro recuperado.
 *
 * @example
 * // Recupera o valor do parâmetro 'geoServer' com valor padrão 'http://localhost:8080/geoserver/isagro/wms'
 * const geoServer = useConfigParam('geoServer', 'http://localhost:8080/geoserver/isagro/wms');
 *
 * @example
 * // Recupera o valor do parâmetro 'showMap' com valor padrão 'true'
 * const showMap = useConfigParam('showMap', true);
 */
const useConfigParam = (paramName: string, defaultValue: any): any => {
  if (!paramName) throw new Error('paramName is required');

  const [searchParams] = useSearchParams();
  let paramValue = searchParams.get(paramName);
  if (paramValue) {
    if (paramValue.toLowerCase() === 'true' || paramValue.toLowerCase() === 'false') {
      console.info(`[useConfigParam] ${paramName} provided by search query: ${paramValue}`);
      return paramValue.toLowerCase() === 'true';
    } else {
      console.info(`[useConfigParam] ${paramName} provided by search query: ${paramValue}`);
      return paramValue;
    }
  }

  const envVal = process?.env?.[`REACT_APP_${paramName.toUpperCase()}`];
  const viteEnvVal = (import.meta as any)?.env?.[`VITE_${paramName.toUpperCase()}`];

  if (!paramValue && envVal) {
    paramValue = envVal;
    console.info(`[useConfigParam] ${paramName} provided by environment variable: ${paramValue}`);
    return paramValue;
  }

  if (!paramValue && viteEnvVal) {
    paramValue = viteEnvVal;
    console.info(`[useConfigParam] ${paramName} provided by environment variable: ${paramValue}`);
    return paramValue;
  }

  console.info(`[useConfigParam] ${paramName} not provided, using default value: ${defaultValue}`);
  return defaultValue;
};

export default useConfigParam;
