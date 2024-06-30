import ReactDOM from "react-dom/client";

// import App from "./App";
// import { SampleComponent } from "./App";

import App, { SampleComponent } from "./App";

// destructure import - name should match as in the exported file
// import { mul, add } from "./utils.js";

// importing normal exports as the entire object from the file
import sub, * as utils from "./utils.js";

// import add & mul from utils

import Student from "./Components/Students/Student.jsx";
// import "./index.css";

const studentsData = [
  {
    id: "1221",
    name: "Sanjay",
    department: "ECE",
    isPassedOut: false,
    image:
      "https://img.freepik.com/free-photo/young-man-student-with-notebooks-showing-thumb-up-approval-smiling-satisfied-blue-studio-background_1258-65597.jpg",
  },
  {
    id: "1222",
    name: "Hemanth",
    department: "CSE",
    isPassedOut: true,
    image:
      "https://img.freepik.com/free-photo/front-view-male-student-wearing-black-backpack-holding-copybooks-smiling-blue-wall_140725-42653.jpg",
  },
  {
    id: "1223",
    name: "Udayakumar",
    department: "Civil",
    isPassedOut: false,
    image:
      "https://img.freepik.com/premium-psd/satisfied-young-student-posing_1459-5824.jpg",
  },
];

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
    {/* props or attribute --> name, image, department */}
    <h1>Without List Rendering</h1>
    <Student
      name="Sanjay"
      department="ECE"
      isPassedOut={false}
      image="https://img.freepik.com/free-photo/young-man-student-with-notebooks-showing-thumb-up-approval-smiling-satisfied-blue-studio-background_1258-65597.jpg"
    />
    <Student
      name="Hemanth"
      department="CSE"
      isPassedOut={true}
      image="https://img.freepik.com/free-photo/front-view-male-student-wearing-black-backpack-holding-copybooks-smiling-blue-wall_140725-42653.jpg"
    />
    <Student
      name="Udayakumar"
      department="Civil"
      isPassedOut={false}
      image="https://img.freepik.com/premium-psd/satisfied-young-student-posing_1459-5824.jpg"
    />
    <h1>With List Rendering</h1>
    {studentsData.map((stu) => (
      <Student
        key={stu.id}
        name={stu.name}
        department={stu.department}
        image={stu.image}
        isPassedOut={stu.isPassedOut}
      />
    ))}
  </div>
);
