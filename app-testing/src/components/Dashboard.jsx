import React from 'react';
import Box from 'mineral-ui/Box';
import Button from 'mineral-ui/Button';

const Dashboard = ({
  balls, setBalls, strikes, setStrikes,
}) => {
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

  const reset = () => {
    setStrikes(0);
    setBalls(0);
  };

  const handleStrike = () => {
    if (strikes < 2) {
      setStrikes(strikes + 1);
    } else {
      reset();
    }
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

  return (
    <Box>
      <Button primary type="button" onClick={() => (handleAction('strike'))}>Strike</Button>
      <Button secondary type="button" onClick={() => (handleAction('ball'))}>Ball</Button>
      <Button secondary type="button" onClick={() => (handleAction('foul'))}>Foul</Button>
      <Button secondary type="button" onClick={() => (handleAction('hit'))}>Hit</Button>
    </Box>
  );
};


export default Dashboard;
