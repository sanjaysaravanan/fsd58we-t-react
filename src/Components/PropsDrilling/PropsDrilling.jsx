/* eslint-disable react/prop-types */
import { useState } from "react";

const ChildC = ({ count, handleInc }) => {
  return (
    <>
      <h4>Child C</h4>
      {console.log("Child C rendering")}

      <button onClick={handleInc} style={{ fontSize: 24 }}>
        {count}
      </button>
    </>
  );
};

const ChildB = ({ count, handleInc }) => {
  return (
    <>
      <h3>Child B</h3>
      {console.log("Child B rendering")}

      <ChildC count={count} handleInc={handleInc} />
    </>
  );
};

const ChildA = ({ count, handleInc }) => {
  return (
    <>
      <h2>Child A</h2>
      {console.log("Child A rendering")}

      <ChildB count={count} handleInc={handleInc} />
    </>
  );
};

const Parent = () => {
  const [count, setCount] = useState(0);

  const handleInc = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h1>Parent</h1>
      {console.log("Parent rendering")}
      <ChildA count={count} handleInc={handleInc} />
    </>
  );
};

const PropsDrilling = () => {
  return <Parent />;
};

export default PropsDrilling;
