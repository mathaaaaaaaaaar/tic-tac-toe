import '../app/gameIcon.css';

import React from 'react';

const GameIcon = ({ value }) => {
  return (
    <div className={`game-icon ${value}`}>
      {value}
    </div>
  );
};

export default GameIcon;