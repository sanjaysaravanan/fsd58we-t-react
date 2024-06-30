import ReactDOM from "react-dom/client";

// import App from "./App";
// import { SampleComponent } from "./App";

import App, { SampleComponent } from "./App";

// destructure import - name should match as in the exported file
// import { mul, add } from "./utils.js";

// importing normal exports as the entire object from the file
import sub, * as utils from "./utils.js";

// import add & mul from utils

// import "./index.css";

// Virtual DOM Creation
ReactDOM.createRoot(document.getElementById("root")).render(
  <div>
    {/* <App />
    <SampleComponent /> */}
    {/* {mul(8, 9)}
    {add(8, 9)} */}
    {/* {utils.mul(8, 9)}
    {utils.add(8, 9)}
    {sub(8, 9)} */}
  </div>
);
