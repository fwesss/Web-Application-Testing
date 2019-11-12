import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import App from '../App';
import Dashboard from '../components/Dashboard';
import Display from '../components/Display';

it('renders without crashing', () => {
  render(
    <App>
      <Display />
      <Dashboard />
    </App>,
  );
});

describe('Balls', () => {
  it('Balls increases by one when Ball is clicked', () => {
    const { getByLabelText, getByText } = render(
      <App>
        <Display />
        <Dashboard />
      </App>,
    );

    expect(getByLabelText(/Balls/i).textContent).toBe('0');

    fireEvent.click(getByText('Ball'));

    expect(getByLabelText(/Balls/i).textContent).toBe('1');
  });

  it('Balls resets after 4th ball', () => {
    const { getByLabelText, getByText } = render(
      <App>
        <Display />
        <Dashboard />
      </App>,
    );

    expect(getByLabelText(/Balls/i).textContent).toBe('0');

    const maxBalls = 3;

    for (let i = 0; i <= maxBalls; i += 1) {
      fireEvent.click(getByText('Ball'));
    }

    expect(getByLabelText(/Balls/i).textContent).toBe('0');
  });
});

describe('Strikes', () => {
  it('Strikes increases by one when Strike is clicked', () => {
    const { getByLabelText, getByText } = render(
      <App>
        <Display />
        <Dashboard />
      </App>,
    );

    expect(getByLabelText(/Strikes/i).textContent).toBe('0');

    fireEvent.click(getByText('Strike'));

    expect(getByLabelText(/Strikes/i).textContent).toBe('1');
  });

  it('Strikes resets after 3 strikes', () => {
    const { getByLabelText, getByText } = render(
      <App>
        <Display />
        <Dashboard />
      </App>,
    );

    expect(getByLabelText(/Strikes/i).textContent).toBe('0');

    const maxStrikes = 2;

    for (let i = 0; i <= maxStrikes; i += 1) {
      fireEvent.click(getByText('Strike'));
    }

    expect(getByLabelText(/Strikes/i).textContent).toBe('0');
  });
});

describe('Fouls', () => {
  it('Strikes increases by one when Foul is clicked', () => {
    const { getByLabelText, getByText } = render(
      <App>
        <Display />
        <Dashboard />
      </App>,
    );

    expect(getByLabelText(/Strikes/i).textContent).toBe('0');

    fireEvent.click(getByText('Foul'));

    expect(getByLabelText(/Strikes/i).textContent).toBe('1');
  });

  it('Strikes do no increase after 2nd foul', () => {
    const { getByLabelText, getByText } = render(
      <App>
        <Display />
        <Dashboard />
      </App>,
    );

    expect(getByLabelText(/Strikes/i).textContent).toBe('0');

    fireEvent.click(getByText('Foul'));
    fireEvent.click(getByText('Foul'));
    fireEvent.click(getByText('Foul'));

    expect(getByLabelText(/Strikes/i).textContent).toBe('2');
  });
});

describe('Hits', () => {
  it('Hits resets both balls and strikes', () => {
    const { getByLabelText, getByText } = render(
      <App>
        <Display />
        <Dashboard />
      </App>,
    );

    expect(getByLabelText(/Balls/i).textContent).toBe('0');
    fireEvent.click(getByText('Ball'));
    fireEvent.click(getByText('Ball'));

    expect(getByLabelText(/Strikes/i).textContent).toBe('0');
    fireEvent.click(getByText('Strike'));
    fireEvent.click(getByText('Strike'));

    fireEvent.click(getByText('Hit'));

    expect(getByLabelText(/Balls/i).textContent).toBe('0');
    expect(getByLabelText(/Strikes/i).textContent).toBe('0');
  });
});

describe('Outs', () => {
  const maxStrikes = 3;

  it('Outs increases by 1 after 3 strikes', () => {
    const { getByLabelText, getByText } = render(
      <App />,
    );

    expect(getByLabelText(/Outs/i).textContent).toBe('0');

    for (let i = 0; i < maxStrikes; i += 1) {
      fireEvent.click(getByText('Strike'));
    }

    expect(getByLabelText(/Outs/i).textContent).toBe('1');
  });
});

describe('Innings', () => {
  const maxStrikes = 9;

  it('Switches at bat team after 3 outs', () => {
    const { getByLabelText, getByText } = render(
      <App />,
    );

    expect(getByLabelText(/At Bat/i).textContent).toBe('Home');

    for (let i = 0; i < maxStrikes; i += 1) {
      fireEvent.click(getByText('Strike'));
    }

    expect(getByLabelText(/At Bat/i).textContent).toBe('Away');
  });

  it('Increments inning after away team receives 3 outs', () => {
    const { getByLabelText, getByText } = render(
      <App />,
    );

    expect(getByLabelText(/At Bat/i).textContent).toBe('Home');
    expect(getByLabelText(/Inning/i).textContent).toBe('1');

    for (let i = 0; i < maxStrikes; i += 1) {
      fireEvent.click(getByText('Strike'));
    }

    expect(getByLabelText(/At Bat/i).textContent).toBe('Away');
    expect(getByLabelText(/Inning/i).textContent).toBe('1');

    for (let i = 0; i < maxStrikes; i += 1) {
      fireEvent.click(getByText('Strike'));
    }

    expect(getByLabelText(/At Bat/i).textContent).toBe('Home');
    expect(getByLabelText(/Inning/i).textContent).toBe('2');
  });
});
