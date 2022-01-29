import { screen } from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../utils/renderWithRouter';
import App from '../App';

describe('Testando o componente PokemonDetails.js', () => {
  test('Testar as informações detalhadas do Pokémon selecionado exibem na tela', () => {
    renderWithRouter(<App />);

    const buttonDetails = screen.getByRole('link', { name: /More details/i });
    userEvent.click(buttonDetails);

    const namePokemon = screen.getByRole('heading', { name: /Pikachu Details/i });
    expect(namePokemon).toBeInTheDocument();

    expect(buttonDetails).not.toBeInTheDocument();

    const sumary = screen.getByRole('heading', { name: /Summary/i, level: 2 });
    expect(sumary).toBeInTheDocument();

    const paragraph = screen.getByText(/This intelligent Pokémon roasts hard berries/i);
    expect(paragraph).toBeInTheDocument();
  });

  test('Testar na página há uma seção com os mapas de localizações do pokémon', () => {
    renderWithRouter(<App />);

    const buttonDetails = screen.getByRole('link', { name: /More details/i });
    userEvent.click(buttonDetails);

    const mapPokemon = screen.getByRole('heading', { name: 'Game Locations of Pikachu' });
    expect(mapPokemon).toBeInTheDocument();

    const locationPokemon = screen.getAllByAltText(/Pikachu location/i);
    const urlImgLocation1 = 'https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png';
    const urlImgLocation2 = 'https://cdn2.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png';

    locationPokemon.forEach((element) => {
      expect(element).toBeInTheDocument();
      expect(locationPokemon).toHaveLength(2);
      expect(locationPokemon[0]).toHaveAttribute('src', urlImgLocation1);
      expect(locationPokemon[1]).toHaveAttribute('src', urlImgLocation2);
    });
  });

  test('Testar se o usuário pode favoritar um pokémon na página de detalhes', () => {
    renderWithRouter(<App />);

    const btnDetails = screen.getByRole('link', { name: /More details/i });
    userEvent.click(btnDetails);

    const checkFavorite = screen.getByLabelText(/Pokémon favoritado/i);
    expect(checkFavorite).toBeInTheDocument();
  });
});
