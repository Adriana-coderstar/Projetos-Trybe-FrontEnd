import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../utils/renderWithRouter';
import About from '../components/About';

describe('Testando componente About.js', () => {
  beforeEach(() => {
    renderWithRouter(<About />);
  });

  test('Teste se a página contém as informações sobre a Pokédex', () => {
    const firstParagraph = screen.getByText(/This application simulates a Pokédex/i);
    const secondParagraph = screen.getByText(/One can filter Pokémons by type/i);

    expect(firstParagraph).toBeInTheDocument();
    expect(secondParagraph).toBeInTheDocument();
  });

  test('Teste se a página contém um heading "h2"', () => {
    const headingText = screen.getByRole('heading', { name: /About Pokédex/i, level: 2,
    });
    expect(headingText).toBeInTheDocument();
  });

  test('Teste se a página contém a seguinte imagem de uma Pokédex', () => {
    const imgUrl = 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png';
    const imgPokedex = screen.getByRole('img');
    expect(imgPokedex).toHaveAttribute('src', imgUrl);
  });
});
