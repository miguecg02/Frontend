// Registro_desaparecidas.test.jsx
import { render, screen, fireEvent } from '@testing-library/react';
import Registro_desaparecidas from './Registro_desaparecidas';

describe('RegistroDesaparecidas Form', () => {
  test('should validate required fields', async () => {
    render(<Registro_desaparecidas />);

    const submitButton = screen.getByText('Registrar');
    fireEvent.click(submitButton);

    expect(await screen.findByText('Por favor, complete nombre y primer apellido.')).toBeInTheDocument();
  });

  test('should handle image upload', async () => {
    render(<Registro_desaparecidas />);

    const file = new File(['test'], 'test.png', { type: 'image/png' });
    const input = screen.getByLabelText(/imagen/i);

    fireEvent.change(input, { target: { files: [file] } });

    // Verify image preview appears
    await waitFor(() => {
      expect(screen.getByAltText('Preview')).toBeInTheDocument();
    });
  });
});
