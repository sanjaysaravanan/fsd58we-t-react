import { useReducer } from "react";

const initialState = {
  top: 150,
  left: 150,
};

const reducerFunc = (state = initialState, action) => {
  switch (action) {
    case "move_top":
      if (state.top !== 0) {
        return {
          ...state,
          top: state.top - 150,
        };
      }
      return state;
    case "move_down":
      if (state.top !== 300) {
        return {
          ...state,
          top: state.top + 150,
        };
      }
      return state;
    case "move_left":
      if (state.left !== 0) {
        return {
          ...state,
          left: state.left - 150,
        };
      }
      return state;
    case "move_right":
      if (state.left !== 300) {
        return {
          ...state,
          left: state.left + 150,
        };
      }
      return state;
    default:
      return state;
  }
};

const MoveGame = () => {
  const [position, dispatch] = useReducer(reducerFunc, initialState);

  return (
    <>
      <div
        style={{
          height: "450px",
          width: "450px",
          border: "1px solid",
          position: "relative",
        }}
      >
        <div
          style={{
            height: "150px",
            width: "150px",
            position: "absolute",
            backgroundColor: "red",
            // top: positon.top,
            // left: positon.left
            ...position,
          }}
        ></div>
      </div>
      <button onClick={() => dispatch("move_top")}>Up</button>
      <button onClick={() => dispatch("move_left")}>Left</button>
      <button onClick={() => dispatch("move_right")}>Right</button>
      <button onClick={() => dispatch("move_down")}>Down</button>
      <br />
      <button>Reset</button>
    </>
  );
};

export default MoveGame;
