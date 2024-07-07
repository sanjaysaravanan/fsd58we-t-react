import PropTypes from "prop-types";

const Offer = ({ icon, title, description, link, linkText }) => {
  return (
    <div style={{ border: "1px solid", padding: 4, margin: 4 }}>
      <img src={icon} alt={title} />
      <h1>{title}</h1>
      <p>{description}</p>
      <a href={link}>{linkText}</a>
    </div>
  );
};

Offer.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
  linkText: PropTypes.string,
};

export default Offer;
