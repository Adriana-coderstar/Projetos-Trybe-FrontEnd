import React from 'react';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';

function renderWithRouter(component) {
  const history = createMemoryHistory();

  const renderObject = render(
    <Router history={ history }>
      {component}
    </Router>,
  );
  return { history, ...renderObject };
}

export default renderWithRouter;
