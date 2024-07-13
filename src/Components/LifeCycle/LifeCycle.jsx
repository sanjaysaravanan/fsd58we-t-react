import { useEffect, useState } from "react";

const ChildComponent = () => {
  const [txt, setTxt] = useState("");

  const [mountStatus, setMountStatus] = useState(false);

  const handleChange = (e) => setTxt(e.target.value);

  // mounted phase
  useEffect(() => {
    // Code-Execution During Mounted Here
    console.log("Component is Mounted");
    setMountStatus(true);

    // Unmounted Phase
    return () => {
      // Code-Execution During Un-Mounted Phase Here
      console.log("Component is Getting Un-Mounted");
    };
  }, []);

  useEffect(() => {
    // statement below will be executed on both mounted & updated phases
    if (mountStatus) {
      // updated phase statements
      console.log("Updating Phase");
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [txt]);

  return (
    <>
      <br />
      <input onChange={handleChange} />
      <h1>I am a Child H1 Element, Text: {txt}</h1>
    </>
  );
};

const LifeCycle = () => {
  const [mounted, setMounted] = useState(false);

  const handleMount = () => {
    if (mounted) {
      // Remove the Element from JSX
      setMounted(false);
    } else {
      // Add the Element to JSX
      setMounted(true);
    }
  };

  return (
    <>
      <button onClick={handleMount}>{mounted ? "Un-Mount" : "Mount"}</button>
      {mounted && <ChildComponent />}
    </>
  );
};

export default LifeCycle;
