import "./App.css";

// arrow syntax component - can also be created from a new file
const SampleComponent = () => {
  return <h3>Hi I am a sample Component</h3>;
};

// function component( which returns JSX element )

function App() {
  const batch = "FSD58WE2-TAMIL";
  const mentor = "Sanjay";

  return (
    <>
      <h1 className="border-big">Hello {batch}!!</h1>
      <h2>Mentor: {mentor}</h2>
      <label htmlFor="fname">Full Name</label>
      <input type="text" id="fname" />
      <h6>{10 / 5}</h6>
    </>
  );
}

// normal export
export { SampleComponent };

export default App;
