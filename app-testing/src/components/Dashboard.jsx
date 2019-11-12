import React from 'react';
import PropTypes from 'prop-types';
import Button from 'mineral-ui/Button';
import ButtonGroup from 'mineral-ui/ButtonGroup/ButtonGroup';

const Dashboard = ({
  balls, setBalls, strikes, setStrikes, reset,
}) => {
  const handleStrike = () => {
    setStrikes(strikes + 1);
  };

  const handleBall = () => {
    if (balls < 3) {
      setBalls(balls + 1);
    } else {
      reset();
    }
  };

  const handleFoul = () => {
    if (strikes < 2) {
      setStrikes(strikes + 1);
    }
  };

  const handleHit = () => {
    reset();
  };

  const handleAction = (type) => {
    switch (type) {
      case 'strike':
        handleStrike();
        break;
      case 'ball':
        handleBall();
        break;
      case 'foul':
        handleFoul();
        break;
      case 'hit':
        handleHit();
        break;
      default:
        handleHit();
    }
  };

  return (
    <ButtonGroup aria-label="Score" text>
      <Button type="button" onClick={() => (handleAction('strike'))}>Strike</Button>
      <Button type="button" onClick={() => (handleAction('ball'))}>Ball</Button>
      <Button type="button" onClick={() => (handleAction('foul'))}>Foul</Button>
      <Button type="button" onClick={() => (handleAction('hit'))}>Hit</Button>
    </ButtonGroup>
  );
};

Dashboard.propTypes = {
  balls: PropTypes.number,
  setBalls: PropTypes.func,
  strikes: PropTypes.number,
  setStrikes: PropTypes.func,
};

Dashboard.defaultProps = {
  balls: 0,
  setBalls: () => {},
  strikes: 0,
  setStrikes: () => {},
};

export default Dashboard;
