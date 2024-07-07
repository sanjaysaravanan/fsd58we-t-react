import PropTypes from "prop-types";

import styles from "./Teacher.module.css";
// Module css has to be imported like above

const Teacher = ({
  id,
  name,
  image,
  role,
  dept,
  isSenior,
  duration,
  addToFavorites,
  removeFromFavorites,
  isFavorite = false,
}) => {
  return (
    // <div className="border-big root">
    // Usage of Module CSS & Multiple className
    <div className={`${styles["border-big"]} ${styles["root"]} bg-yellow`}>
      <img
        src={image}
        alt={name}
        style={{ height: 200, width: 300, objectFit: "contain" }}
      />
      <h1>{name}</h1>
      <h2>{dept}</h2>
      <h3>{role}</h3>
      {isSenior && <i className="fa-solid fa-star"></i>}
      {duration.start} - {duration.end}
      &nbsp;&nbsp;&nbsp;
      {isFavorite ? (
        <button onClick={() => removeFromFavorites(id)}>
          Remove From My Favorites
        </button>
      ) : (
        <button
          // Create one more which will execute addToFavorites
          onClick={() => {
            addToFavorites({
              id,
              name,
              image,
              role,
              dept,
              isSenior,
              duration,
            });
          }}
        >
          Add To My Favorites
        </button>
      )}
    </div>
  );
};

Teacher.propTypes = {
  id: PropTypes.number.isRequired,
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
  addToFavorites: PropTypes.func,
  removeFromFavorites: PropTypes.func,
  isFavorite: PropTypes.bool,
};

export default Teacher;
