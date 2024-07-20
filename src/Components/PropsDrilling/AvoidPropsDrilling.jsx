/* eslint-disable react/prop-types */
import { useState } from "react";

const ChildC = () => {
  const [count, setCount] = useState(0);

  const handleInc = () => {
    setCount(count + 1);
  };
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

const ChildB = () => {
  return (
    <>
      <h3>Child B</h3>
      {console.log("Child B rendering")}

      <ChildC />
    </>
  );
};

const ChildA = () => {
  return (
    <>
      <h2>Child A</h2>
      {console.log("Child A rendering")}

      <ChildB />
    </>
  );
};

const Parent = () => {
  return (
    <>
      <h1>Parent</h1>
      {console.log("Parent rendering")}
      <ChildA />
    </>
  );
};

const AvoidPropsDrilling = () => {
  return <Parent />;
};

export default AvoidPropsDrilling;
