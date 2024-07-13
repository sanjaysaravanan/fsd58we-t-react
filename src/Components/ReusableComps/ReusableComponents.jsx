import PropTypes from "prop-types";

import IconOne from "../../assets/icon-one.webp";
import IconTwo from "../../assets/icon-two.webp";

const iconMap = {
  1: IconOne,
  2: IconTwo,
};

// Children or Component as property
export const Offer = ({
  icon,
  title,
  description,
  link,
  linkText,
  component,
  children,
}) => {
  return (
    <div style={{ border: "1px solid", padding: 4, margin: 4 }}>
      <img src={iconMap[icon]} alt={title} />
      <h1>{title}</h1>
      <p>{description}</p>
      <a href={link}>{linkText}</a>
      <br />
      {component}
      {children}
    </div>
  );
};

Offer.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
  linkText: PropTypes.string,
  component: PropTypes.node, // JSX
  children: PropTypes.node,
};

const offers = [
  {
    icon: "1",
    title: "Self Paced Courses",
    description: "Learn & Upskill via Online Courses",
    link: "/offers",
    linkText: "Take a look",
  },
  {
    icon: "2",
    title: "LIVE Classes",
    description: "Live Classes offering Guaranteed Job Placement Support",
    link: "/offers",
    linkText: "Take a look",
  },
  {
    icon: "1",
    title: "Full Stack Development",
    description: "Learn Javascript, HTML, CSS & more",
    link: "/features",
    linkText: "Know More",
  },
];

const components = [
  <h1 key="2">Hi Hello</h1>,
  <img
    key="2"
    src={
      "https://img.freepik.com/free-vector/gradient-human-rights-day-background_52683-149974.jpg"
    }
    height={100}
    width={100}
    alt="Something"
  />,
  <a key="3" href="https://google.com">
    Click For Google
  </a>,
];

const Main = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {offers.map((o, index) => (
        <Offer
          key={o.title}
          title={o.title}
          description={o.description}
          icon={o.icon}
          link={o.link}
          linkText={o.linkText}
          component={components[index]}
        >
          <h1 key="2">Hi Hello</h1>
        </Offer>
      ))}
    </div>
  );
};

export default Main;
