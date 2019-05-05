import React from "react";

export const StateCtx = React.createContext();

const initState = {
  text: "hello",
  color: "red"
};

const useCustomHook = ([state, setState]) => {
  const changeColor = () =>
    setState(prevState => ({ ...prevState, color: "yellow" }));
  const changeText = () =>
    setState(prevState => ({ ...prevState, text: "DDDDDD" }));
  return {
    ...state,
    changeColor,
    changeText
  };
};
export const StateProvider = ({ children }) => {
  const { color, text, changeColor, changeText } = useCustomHook(
    React.useState(initState)
  );

  return (
    <StateCtx.Provider value={{ color, text, changeColor, changeText }}>
      {children}
    </StateCtx.Provider>
  );
};
