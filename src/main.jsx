import ReactDOM from "react-dom/client";

// import App from "./App";
// import { SampleComponent } from "./App";

// import App, { SampleComponent } from "./App";
import Teachers from "./Components/Teacher/Teachers"; // Teacher css will be added

import "./index.css"; // index.css getting added at last
import Counter from "./Components/Counter/Counter";
import EventHandling from "./Components/Event-Handling/Event-Handling";
import Offer from "./Components/ReusableComps/ReusableComponents";

const offers = [
  {
    icon: "https://www.guvi.in/build/q-CDE1FhG5.webp",
    title: "Self Paced Courses",
    description: "Learn & Upskill via Online Courses",
    link: "/offers",
    linkText: "Take a Look",
  },
  {
    icon: "https://www.guvi.in/build/q-CDE1FhG5.webp",
    title: "LIVE Classes",
    description: "Live Classes offering Guaranteed Job Placement Support",
    link: "/offers",
    linkText: "Take a Look",
  },
];

const features = [
  {
    icon: "https://www.guvi.in/build/q-CDE1FhG5.webp",
    title: "Courses",
    description: "Learn & Upskill via Online Courses",
    link: "/offers",
    linkText: "Know More",
  },
  {
    icon: "https://www.guvi.in/build/q-CDE1FhG5.webp",
    title: "Classes",
    description: "Live Classes offering Guaranteed Job Placement Support",
    link: "/offers",
    linkText: "know more",
  },
];

// Virtual DOM Creation
ReactDOM.createRoot(document.getElementById("root")).render(
  <div>
    {/* <App /> */}
    {/* <Teachers /> */}
    {/* <Counter initialValue={99} /> */}
    {/* <EventHandling /> */}
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {offers.map((o) => (
        <Offer
          key={o.title}
          title={o.title}
          description={o.description}
          icon={o.icon}
          link={o.link}
          linkText={o.linkText}
        />
      ))}
      {features.map((o) => (
        <Offer
          key={o.title}
          title={o.title}
          description={o.description}
          icon={o.icon}
          link={o.link}
          linkText={o.linkText}
        />
      ))}
      {/* Spreading the objects to props */}
      {/* {offers.map((o) => (
        <Offer key={o.title} {...o} />
      ))} */}
    </div>
  </div>
);
