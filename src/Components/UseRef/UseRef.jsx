import { useRef } from "react";

const UseRef = () => {
  const ref = useRef(0);

  const inpRef = useRef(null);

  const handleClick = () => {
    ref.current = ref.current + 1;
    alert(ref.current); // initial value that was placed in useRef

    console.log(inpRef.current);
  };

  const handleFocus = (e) => {
    console.log(e.target);
    console.log(inpRef.current);
  };

  const focusViaBtn = () => {
    inpRef.current.focus();
  };

  return (
    <div>
      <input
        ref={inpRef}
        onFocus={handleFocus}
        type="text"
        placeholder="Enter Something"
      />

      <button onClick={focusViaBtn}>Click To Focus On the Input</button>
      <br />
      <br />
      <button onClick={handleClick}>
        Click To See the Value {ref.current}
      </button>
    </div>
  );
};

export default UseRef;
