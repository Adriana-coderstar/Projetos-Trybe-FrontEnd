import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import renderWithRouter from '../utils/renderWithRouter';

describe(' Testando o componente Pokemon.js', () => {
  test('Testar se é renderizado um card com as informações de determinado pokémon',
    () => {
      renderWithRouter(<App />);

      const namePokemon = screen.getByTestId('pokemon-name');
      expect(namePokemon).toHaveTextContent(/Pikachu/i);
    });

  test('Testar o tipo correto do pokémon deve ser mostrado na tela', () => {
    renderWithRouter(<App />);

    const typePokemon = screen.getByTestId('pokemon-type');
    expect(typePokemon).toHaveTextContent(/Electric/i);
  });

  test('Testar o peso médio do pokémon exibido com um texto no formato Average weight',
    () => {
      renderWithRouter(<App />);

      const weightPokemon = screen.getByTestId('pokemon-weight');
      expect(weightPokemon).toHaveTextContent(/Average weight: 6.0 kg/i);
    });

  test('Testar a imagem do Pokémon deve ser exibida.', () => {
    renderWithRouter(<App />);

    const imgPokemon = screen.getByAltText(/Pikachu sprite/i);
    expect(imgPokemon).toBeInTheDocument();

    const urlPokemon = 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png';
    expect(imgPokemon).toHaveAttribute('src', urlPokemon);
  });

  test('Testar se o card do Pokémon existe icone estrela quando favoritado', () => {
    const { history } = renderWithRouter(<App />);

    const detailsPokemon = screen.getByRole('link', { name: /More details/i });
    expect(detailsPokemon).toBeInTheDocument();

    userEvent.click(detailsPokemon);
    expect(history.location.pathname).toBe('/pokemons/25');
  });

  test('Testar se existe um ícone de estrela nos Pokémons favoritados', () => {
    renderWithRouter(<App />);

    const btnDetails = screen.getByRole('link', { name: /More details/i });
    userEvent.click(btnDetails);

    const checkFavorite = screen.getByLabelText(/Pokémon favoritado/i);
    userEvent.click(checkFavorite);

    const altFavorite = screen.getByAltText(/Pikachu is marked as favorite/i);
    expect(altFavorite).toBeInTheDocument();
    expect(altFavorite).toHaveAttribute('src', '/star-icon.svg');
  });
});
