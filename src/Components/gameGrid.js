import '../app/gameGrid.css';

import React, { useState } from 'react';

import GameIcon from './gameIcon';

const GameGrid = () => {
  const [grid, setGrid] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const handleClick = (index) => {
    if (grid[index] || calculateWinner(grid)) return;

    const newGrid = grid.slice();
    newGrid[index] = isXNext ? 'X' : 'O';
    setGrid(newGrid);
    setIsXNext(!isXNext);
  };

  const renderSquare = (index) => {
    return (
        <button className="square" onClick={() => handleClick(index)}>
            <GameIcon value={grid[index]} />
        </button>
    );
  };

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const winner = calculateWinner(grid);
  const status = winner ? `Winner: ${winner}` : `Next player: ${isXNext ? 'X' : 'O'}`;

  return (
    <div className='full-board'>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default GameGrid;