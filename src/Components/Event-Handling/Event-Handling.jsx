const EventHandling = () => {
  const openAlert = (e) => {
    // Event inside the handler
    console.log(e.target);

    alert();
  };

  const logSomething = (e) => {
    console.log(e);
    console.log("Something");
  };

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    console.log("Form Submitting");
  };

  return (
    <>
      {/* Correct  */}
      <button onClick={openAlert}>Open Alert</button>
      {/* ** In-Correct ** */}
      {/* <button onClick={openAlert()}>Open Alert</button> */}

      <br />
      <br />
      <button onClick={logSomething}>Console Log Something</button>
      <br />
      <br />

      {/* Display the entered in the console */}
      <input type="text" onChange={handleChange} />
      <br />
      <br />

      {/* Handle the Form Submit */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="inp">Input</label>
        <input id="inp" name="inp" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default EventHandling;
