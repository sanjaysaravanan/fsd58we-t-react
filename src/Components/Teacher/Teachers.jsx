// List of all the Teachers will here

import { useState } from "react";
import Teacher from "./Teacher";
import data from "./teachers.json";

const Teachers = () => {
  const [favorites, setFavorites] = useState([]);

  const handleAddFavorites = (teacher) => {
    // add the teacher object to the favorites
    const temp = [...favorites, teacher];
    setFavorites(temp);
  };

  const removeFromFavorites = (teacherId) => {
    // remove the teacher object whose id is teacherId, from favorites
    const temp = favorites.filter((t) => t.id !== teacherId);

    setFavorites(temp);
  };

  return (
    <>
      <header
        style={{
          display: "flex",
          width: "100%",
          padding: 8,
          justifyContent: "space-between",
        }}
      >
        {console.log("Favorites", favorites)}
        <h3>Favorite Teachers ({favorites.length})</h3>
      </header>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {data.map((teacher, index) => (
          <Teacher
            key={teacher.id} // VDOM prop not used by component
            //key={index} // wrong implementation
            id={teacher.id}
            name={teacher.name}
            role={teacher.role}
            image={teacher.image}
            dept={teacher.dept}
            isSenior={teacher.isSenior}
            duration={teacher.duration}
            addToFavorites={handleAddFavorites}
            removeFromFavorites={removeFromFavorites}
            isFavorite={Boolean(favorites.find((f) => f.id === teacher.id))}
          />
        ))}
      </div>
    </>
  );
};

export default Teachers;
