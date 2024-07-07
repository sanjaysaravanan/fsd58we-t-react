import { useState } from "react";
import PropTypes from "prop-types";

const Counter = ({ initialValue = 0 }) => {
  /* // Wrong way of chaning the value in DOM

  let count = initialValue;

  const handleInc = () => {
    count = count + 1;
    console.log("JS Mem Count:", count);
  };

  const handleDec = () => {
    count = count - 1;
  }; */

  // Correct way using a state variable

  const [count, setCount] = useState(initialValue);

  const handleInc = () => {
    setCount(count + 1);
    // Worng Inspection
    //console.log("Count:", count); // this is will return the old value of count because setcount async in nature
  };

  const handleDec = () => {
    setCount(count - 1);
  };

  return (
    <>
      {/* {console.log("Rendering...")}
      {console.log("DOM Count:", count)} */}
      <h1>Simple Count Increase / Decrease Option</h1>
      <h2>{count}</h2>
      <button onClick={handleDec}>-</button>
      <button onClick={handleInc}>+</button>
    </>
  );
};

Counter.propTypes = {
  initialValue: PropTypes.number,
};

export default Counter;
