import React from "react";

export const ReducerCtx = React.createContext();

const initState = {
  text: "hello",
  color: "red"
};

const reducer = (state, { type }) => {
  switch (type) {
    case "text": {
      return {
        ...state,
        text: "Foooo"
      };
    }

    case "color": {
      return {
        ...state,
        color: "blue"
      };
    }

    default: {
      return state;
    }
  }
};

export const ReducerProvider = ({ children }) => {
  const contextValue = React.useReducer(reducer, initState);
  return (
    <ReducerCtx.Provider value={contextValue}>{children}</ReducerCtx.Provider>
  );
};
