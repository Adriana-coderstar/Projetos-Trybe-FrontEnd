import { screen } from '@testing-library/react';
import React from 'react';
import FavoritePokemons from '../components/FavoritePokemons';
import renderWithRouter from '../utils/renderWithRouter';

describe('Testando componente FavoritePokemons.js', () => {
  renderWithRouter(<FavoritePokemons />);

  test('Testar a mensagem "No favorite pokemon found" se não tiver pokémons favoritos',
    () => {
      const noFavorite = screen.getByText(/No favorite pokemon found/i);
      expect(noFavorite).toBeInTheDocument();
    });
});
