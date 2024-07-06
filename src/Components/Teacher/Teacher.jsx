import PropTypes from "prop-types";

import styles from "./Teacher.module.css";
// Module css has to be imported like above

const Teacher = ({ name, image, role, dept, isSenior, duration }) => {
  return (
    <div className={styles["border-big"]}>
      <img src={image} alt={name} />
      <h1>{name}</h1>
      <h2>{dept}</h2>
      <h3>{role}</h3>
      {isSenior && <i className="fa-solid fa-star"></i>}
      {duration.start} - {duration.end}
    </div>
  );
};

Teacher.propTypes = {
  name: PropTypes.string,
  role: PropTypes.string,
  image: PropTypes.string,
  dept: PropTypes.string,
  isSenior: PropTypes.bool,
  // duration: PropTypes.object,
  duration: PropTypes.shape({
    start: PropTypes.string.isRequired,
    end: PropTypes.string.isRequired,
  }),
};

export default Teacher;
