import ReactDOM from "react-dom/client";
import MainApp from "./Components/ReusableComps/ReusableComponents";
import LifeCycle from "./Components/LifeCycle/LifeCycle";
import PropsDrilling from "./Components/PropsDrilling/PropsDrilling";
import AvoidPropsDrilling from "./Components/PropsDrilling/AvoidPropsDrilling";

// import { Offer } from "./Components/ReusableComps/ReusableComponents";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    {/* <MainApp /> */}
    {/* <LifeCycle /> */}
    {/* <PropsDrilling /> */}
    <AvoidPropsDrilling />
  </>
);
