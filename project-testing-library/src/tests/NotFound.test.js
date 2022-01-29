import { screen } from '@testing-library/react';
import React from 'react';
import NotFound from '../components/NotFound';
import renderWithRouter from '../utils/renderWithRouter';

describe('Testando o componente NotFound.js', () => {
  beforeEach(() => {
    renderWithRouter(<NotFound />);
  });

  test('Testar se página contém "h2" com o texto "Page requested not found"', () => {
    const headingText = screen.getByRole('heading',
      { name: /Page requested not found /i, level: 2 });
    expect(headingText).toBeInTheDocument();
  });

  test('Testar se página mostra a imagem do gif', () => {
    const imgUrl = 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif';
    const srcImg = screen.getByAltText(/Pikachu crying because the page requested/i);
    expect(srcImg).toBeInTheDocument();
    expect(srcImg).toHaveAttribute('src', imgUrl);
  });
});
