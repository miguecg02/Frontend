// VerPersonaEnMovilidad.test.jsx
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import VerPersonaEnMovilidad from './VerPersonaEnMovilidad';
import { AuthProvider } from '../AuthContext';

// Mock the API calls
jest.mock('../config', () => ({
  API_URL: 'http://test-api'
}));

global.fetch = jest.fn();

describe('VerPersonaEnMovilidad', () => {
  const mockPersona = {
    idPersona: 1,
    Nombre: 'Test',
    PrimerApellido: 'User',
    Situacion: 'Desaparecida'
  };

  beforeEach(() => {
    fetch.mockReset();
  });

  test('should load and display persona data', async () => {
    fetch.mockImplementationOnce(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockPersona)
      })
    );

    render(
      <BrowserRouter>
        <AuthProvider value={{ user: { rol: 'Coordinador' } }}>
          <VerPersonaEnMovilidad />
        </AuthProvider>
      </BrowserRouter>
    );

    await waitFor(() => {
      expect(screen.getByText('Test User')).toBeInTheDocument();
    });
  });
});
