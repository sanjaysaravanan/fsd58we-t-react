import { useContext, useState } from "react";
import ThemeContext from "./ThemeContext";

const ThemeComponent = () => {
  const modeObj = useContext(ThemeContext);

  return (
    <div
      style={{
        backgroundColor: modeObj.mode === "light" ? "white" : "black",
        color: modeObj.mode === "light" ? "black" : "white",
        height: "100vh",
      }}
    >
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: 75,
          borderBottom: "1px solid",
          backgroundColor: "inherit",
        }}
      >
        <h2>Simple Header</h2>
        <button
          onClick={modeObj.changeMode}
          style={{
            float: "right",
            position: "absolute",
            top: 10,
            right: 5,
            color: "inherit",
            backgroundColor: "inherit",
            borderColor: "inherit",
          }}
        >
          {modeObj.mode === "light" ? "Dark" : "Light"}
        </button>
      </header>
      <aside
        style={{
          position: "fixed",
          top: 76,
          left: 0,
          width: "200px",
          height: "calc(100vh - 75px)",
          borderRight: "1px solid",
          backgroundColor: "inherit",
        }}
      >
        <h3>Simple Sidebar</h3>
      </aside>
      <main
        style={{
          marginTop: 75,
          padding: 16,
          marginLeft: 200,
          backgroundColor: "inherit",
          height: "calc(100vh - 75px)",
        }}
      >
        <h3>Simple Content</h3>
      </main>
    </div>
  );
};

const Parent = () => {
  const [mode, setMode] = useState("light");

  const changeMode = () => {
    if (mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };

  return (
    <ThemeContext.Provider value={{ mode, changeMode }}>
      <ThemeComponent />
    </ThemeContext.Provider>
  );
};

export default Parent;
