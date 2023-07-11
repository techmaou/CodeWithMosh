import React, { useState } from "react";
import style from "./Like.module.css";
import { FcLike } from "react-icons/fc";

const Like = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <button onClick={() => setToggle(!toggle)}>
      <FcLike size={toggle ? 40 : 30} />
    </button>
  );
};

export default Like;
