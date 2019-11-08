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

    fireEvent.click(getByText('Ball'));
    fireEvent.click(getByText('Ball'));
    fireEvent.click(getByText('Ball'));
    fireEvent.click(getByText('Ball'));

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

    fireEvent.click(getByText('Strike'));
    fireEvent.click(getByText('Strike'));
    fireEvent.click(getByText('Strike'));

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
