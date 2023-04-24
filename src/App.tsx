import { useState } from 'react';

const App = () => {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: 'John',
    },
  });

  const handleClick = () => {
    setGame({ ...game, player: { name: 'Rana' } });
  };

  return (
    <div>
      <button
        onClick={() => {
          handleClick();
        }}>
        Click me
      </button>
      <p>{game.player.name}</p>
    </div>
  );
};

export default App;
