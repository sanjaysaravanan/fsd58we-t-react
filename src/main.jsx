import ReactDOM from "react-dom/client";

// import App from "./App";
// import { SampleComponent } from "./App";

// import App, { SampleComponent } from "./App";
import Teachers from "./Components/Teacher/Teachers"; // Teacher css will be added

import "./index.css"; // index.css getting added at last
import Counter from "./Components/Counter/Counter";
import EventHandling from "./Components/Event-Handling/Event-Handling";

// Virtual DOM Creation
ReactDOM.createRoot(document.getElementById("root")).render(
  <div>
    {/* <App /> */}
    {/* <Teachers /> */}
    <Counter initialValue={99} />
    {/* <EventHandling /> */}
  </div>
);
