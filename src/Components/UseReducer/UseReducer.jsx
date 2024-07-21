import { useReducer } from "react";
// Reducer Function
// returns the modified values based on a set of instructions

// state - initial
// action - which be an object, string, or anything

// Inc or Decrease a count value

const initialState = {
  count: 0,
};

const reducerFunc = (state = initialState, action) => {
  switch (action) {
    case "increase":
      return {
        ...state,
        count: state.count + 1,
      };
    case "decrease":
      return {
        ...state,
        count: state.count - 1,
      };
    case "reset":
      return {
        ...state,
        count: 0,
      };
    default:
      return state;
  }
};

const UseReducer = () => {
  // works like upgraded version of useState
  const [state, dispatch] = useReducer(reducerFunc, initialState);

  return (
    <>
      <button onClick={() => dispatch("increase")}>+</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
      <button onClick={() => dispatch("decrease")}>-</button>
      <h1>{state.count}</h1>
    </>
  );
};

export default UseReducer;
