import React from "react";
import { ReducerCtx } from "./context";

export const TestApp = () => {
  const [{ color, text }, dispatch] = React.useContext(ReducerCtx);
  console.log("parent:: ");
  return (
    <div>
      <h4 style={{ color }}>{text}</h4>
      <Btns dispatch={dispatch} />
    </div>
  );
};

const Btns = React.memo(({ dispatch }) => {
  console.log("hello child");
  return (
    <div>
      <button onClick={() => dispatch({ type: "color" })}>Change Color</button>
      <button onClick={() => dispatch({ type: "text" })}>Change Text</button>
    </div>
  );
});
