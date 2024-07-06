// List of all the Teachers will here

import Teacher from "./Teacher";
import data from "./teachers.json";

const Teachers = () => {
  console.log(data);
  return (
    <>
      {data.map((teacher, index) => (
        <Teacher
          key={teacher.id}
          //key={index} // wrong implementation
          name={teacher.name}
          role={teacher.role}
          image={teacher.image}
          dept={teacher.dept}
          isSenior={teacher.isSenior}
          duration={teacher.duration}
        />
      ))}
    </>
  );
};

export default Teachers;
