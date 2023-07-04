import React, { useState } from "react";

interface Props {
  text1: string;
  size?: number;
}

const Game = ({ text1, size }: Props) => {
  const [text, setText] = useState(text.slice(0, size));
  return (
    <div>
      {text.slice(size)}
      <button onClick={() => setText(text.slice())}>ShowMore</button>
    </div>
  );
};

export default Game;
