import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import renderWithRouter from '../utils/renderWithRouter';

describe('Testando componente App.js', () => {
  test('Verificando o texto dos links "Home, About e Favorite Pokémons "', () => {
    renderWithRouter(<App />);

    const linkHome = screen.getByRole('link', { name: 'Home' });
    const linkAbout = screen.getByRole('link', { name: 'About' });
    const linkFavorite = screen.getByRole('link', { name: 'Favorite Pokémons' });

    expect(linkHome).toBeInTheDocument();
    expect(linkAbout).toBeInTheDocument();
    expect(linkFavorite).toBeInTheDocument();
  });
});

describe('Testando a navegação á página "Home" ', () => {
  test('Verifica se o Link redireciona a página "Home"', () => {
    const { history } = renderWithRouter(<App />);
    const home = screen.getByRole('link', { name: /home/i });
    userEvent.click(home);

    const { pathname } = history.location;
    expect(pathname).toBe('/');
  });
});

describe('Testando a navegação á página "About" ', () => {
  test('Verifica se o Link redireciona a página "About"', () => {
    const { history } = renderWithRouter(<App />);
    const about = screen.getByRole('link', { name: /about/i });
    userEvent.click(about);

    const { pathname } = history.location;
    expect(pathname).toBe('/about');
  });
});

describe('Testando a navegação á página "Pokémons Favoritados" ', () => {
  test('Verifica se o Link redireciona a página "Favorites"', () => {
    const { history } = renderWithRouter(<App />);
    const favorites = screen.getByRole('link', { name: /Favorite Pokémons/i });
    userEvent.click(favorites);

    const { pathname } = history.location;
    expect(pathname).toBe('/favorites');
  });
});
