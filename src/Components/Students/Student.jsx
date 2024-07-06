/* eslint-disable react/prop-types */
// ToDo: Will be address in the next class
// React Component to Display a single student
import "./Student.css";

// getting props or attributes value
/* const Student = (props) => {
  // const studentObj = {
  //   name: "Sanjay",
  //   id: 1221,
  //   department: "ECE",
  //   image:
  //     "https://img.freepik.com/free-photo/young-man-student-with-notebooks-showing-thumb-up-approval-smiling-satisfied-blue-studio-background_1258-65597.jpg",
  // };

  return (
    <div
      className="stu-root"
      style={{ border: "1px solid", padding: 8, display: "inline-block" }}
    >
      <img
        src={props.image}
        alt={props.name}
        style={{ height: 200, width: "300px" }}
      />
      <h2>{props.name}</h2>
      <h3>Department: {props.department}</h3>
    </div>
  );
}; */

const Student = ({ name, department, image, isPassedOut }) => {
  // const studentObj = {
  //   name: "Sanjay",
  //   id: 1221,
  //   department: "ECE",
  //   image:
  //     "https://img.freepik.com/free-photo/young-man-student-with-notebooks-showing-thumb-up-approval-smiling-satisfied-blue-studio-background_1258-65597.jpg",
  // };

  return (
    <div
      className="stu-root"
      style={{ border: "1px solid", padding: 8, display: "inline-block" }}
    >
      <img src={image} alt={name} style={{ height: 200, width: "300px" }} />
      {/* Conditional Rendering */}
      {/* Method 1 */}
      {/* <h2 style={{ textDecoration: isPassedOut ? "line-through" : "none" }}>
        {name}
      </h2> */}

      {/* Method 2 */}
      {/* {isPassedOut ? (
        <h2 style={{ textDecoration: "line-through" }}>{name}</h2>
      ) : (
        <h2>{name}</h2>
      )} */}

      {/* Method 3 using && */}
      {isPassedOut && (
        <h2 style={{ textDecoration: "line-through", backgroundColor: "#fff" }}>
          {name}
        </h2>
      )}
      {!isPassedOut && <h2>{name}</h2>}
      <h3>Department: {department}</h3>
    </div>
  );
};

export default Student;
