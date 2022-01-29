import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../utils/renderWithRouter';
import App from '../App';
import data from '../data';

describe('Testando componente Pokedex.js', () => {
  test('Testar se página tem `h2` com o texto "Encountered pokémons"', () => {
    renderWithRouter(<App />);
    const headingTitle = screen.getByRole('heading',
      { name: /Encountered pokémons/i, level: 2 });
    expect(headingTitle).toBeInTheDocument();
  });
  test('Testar se aparece Pokémon da lista clicando no botão "Próximo pokémon"', () => {
    renderWithRouter(<App />);

    const btnNext = screen.getByRole('button', { name: /Próximo pokémon/i });
    expect(btnNext).toBeInTheDocument();

    const pokemonList = data;
    pokemonList.forEach(({ name }) => {
      const pokemon = screen.getByText(name);
      userEvent.click(btnNext);
      expect(pokemon).toBeInTheDocument();
    });
  });

  test('Testar se é mostrado apenas um Pokémon por vez', () => {
    renderWithRouter(<App />);
    const detailsPokemon = screen.getAllByText(/More details/i);
    expect(detailsPokemon.length).toBe(1);
  });

  test('Testar se a Pokédex tem os botões de filtro', () => {
    renderWithRouter(<App />);
    const lengthTypes = 7;
    const typePokemons = screen.getAllByTestId('pokemon-type-button');
    expect(typePokemons).toHaveLength(lengthTypes);

    data.forEach(({ type }) => {
      const btnType = screen.getByRole('button', { name: type });
      expect(btnType).toBeInTheDocument();
    });

    const btnAll = screen.getByRole('button', { name: /All/i });
    expect(btnAll).toBeInTheDocument();
  });

  test('Testar se a Pokédex contém um botão para resetar o filtro', () => {
    renderWithRouter(<App />);
    const btnAll = screen.getByRole('button', { name: /All/i });
    userEvent.click(btnAll);
    expect(btnAll).toBeInTheDocument();

    const pokemon = screen.getByTestId('pokemon-name');
    expect(pokemon).toBeInTheDocument();
  });
});
