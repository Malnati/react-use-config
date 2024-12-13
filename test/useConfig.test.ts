import { renderHook } from '@testing-library/react';
import { useSearchParams } from 'react-router-dom';
import useConfigParam from '../src/hooks/useConfig';

jest.mock('react-router-dom', () => ({
    useSearchParams: jest.fn(),
}));

describe('useConfigParam', () => {
    afterEach(() => {
        jest.resetAllMocks();
        delete process.env.REACT_APP_GEOSERVER;
        delete process.env.REACT_APP_SHOWMAP;
    });

    it('should return the value from query parameters if present', () => {
        const mockSearchParams = new URLSearchParams();
        mockSearchParams.set('geoServer', 'http://example.com/geoserver');
        (useSearchParams as jest.Mock).mockReturnValue([mockSearchParams]);

        const { result } = renderHook(() => useConfigParam('geoServer', 'http://localhost:8080/geoserver'));
        expect(result.current).toBe('http://example.com/geoserver');
    });

    it('should return the value from environment variables if query parameter is absent', () => {
        (useSearchParams as jest.Mock).mockReturnValue([new URLSearchParams()]);
        process.env.REACT_APP_GEOSERVER = 'http://env.example.com/geoserver';

        const { result } = renderHook(() => useConfigParam('geoServer', 'http://localhost:8080/geoserver'));
        expect(result.current).toBe('http://env.example.com/geoserver');
    });

    it('should return the default value if neither query parameter nor environment variable is present', () => {
        (useSearchParams as jest.Mock).mockReturnValue([new URLSearchParams()]);

        const { result } = renderHook(() => useConfigParam('geoServer', 'http://localhost:8080/geoserver'));
        expect(result.current).toBe('http://localhost:8080/geoserver');
    });

    it('should parse "true" and "false" values correctly from query parameters', () => {
        const mockSearchParams = new URLSearchParams();
        mockSearchParams.set('showMap', 'true');
        (useSearchParams as jest.Mock).mockReturnValue([mockSearchParams]);

        const { result } = renderHook(() => useConfigParam('showMap', false));
        expect(result.current).toBe(true);

        mockSearchParams.set('showMap', 'false');
        const { result: resultFalse } = renderHook(() => useConfigParam('showMap', true));
        expect(resultFalse.current).toBe(false);
    });

    it('should throw an error if paramName is not provided', () => {
        expect(() => renderHook(() => useConfigParam('', 'default'))).toThrow('paramName is required');
    });
});
