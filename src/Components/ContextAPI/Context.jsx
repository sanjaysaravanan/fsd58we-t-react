import { createContext, useContext, useState } from "react";

// Creation of a new context
const CountContext = createContext(null);

const ChildC = () => {
  // consume / subscribe from child
  const contextObj = useContext(CountContext);

  return (
    <>
      <h4>Child C</h4>
      {console.log("Child C rendering", contextObj)}

      <button onClick={contextObj.handleInc} style={{ fontSize: 24 }}>
        {contextObj.count}
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
  // How to change the context
  const [count, setCount] = useState(999);

  const handleInc = () => {
    setCount(count + 1);
  };

  return (
    // Providing a Context to a component
    <CountContext.Provider value={{ count, handleInc }}>
      <ChildA />
    </CountContext.Provider>
  );
};

export default Parent;
