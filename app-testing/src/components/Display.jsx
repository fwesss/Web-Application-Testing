import React from 'react';
import Box from 'mineral-ui/Box';

const Display = ({ balls, strikes }) => (
  <Box>
    <h2 id="balls">
      Balls:
      <span aria-labelledby="balls">{balls}</span>
    </h2>

    <h2 id="strikes">
      Strikes:
      <span aria-labelledby="strikes">{strikes}</span>
    </h2>
  </Box>
);


export default Display;
