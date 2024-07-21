import { useRef } from "react";

const teachers = [
  {
    id: 1,
    name: "Alice Johnson",
    dept: "Mathematics",
    role: "Professor",
    image:
      "https://img.freepik.com/free-photo/teacher-doing-english-lesson-online-his-students_23-2148963017.jpg",
    isSenior: true,
    duration: {
      start: "2015",
      end: "2019",
    },
  },
  {
    id: 2,
    name: "David Smith",
    dept: "Physics",
    role: "Assistant Professor",
    image:
      "https://img.freepik.com/free-photo/smiley-teacher-holding-tablet_23-2148668619.jpg",
    isSenior: false,
    duration: {
      start: "2015",
      end: "2019",
    },
  },
  {
    id: 3,
    name: "Eva Brown",
    dept: "Chemistry",
    role: "Lecturer",
    image:
      "https://img.freepik.com/premium-photo/smiley-teacher-standing-classroom_23-2148668557.jpg",
    isSenior: false,
    duration: {
      start: "2015",
      end: "2019",
    },
  },
];

const ImageScrollInto = () => {
  const imgOneRef = useRef(null);
  const imgTwoRef = useRef(null);
  const imgThreeRef = useRef(null);

  const refArr = [imgOneRef, imgTwoRef, imgThreeRef];

  const showImage = (imgRef) => {
    imgRef.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };

  return (
    <div>
      <button onClick={() => showImage(imgOneRef)}>Image 1</button>
      <button onClick={() => showImage(imgTwoRef)}>Image 2</button>
      <button onClick={() => showImage(imgThreeRef)}>Image 3</button>
      {teachers.map((teacher, i) => (
        <img
          ref={refArr[i]}
          src={teacher.image}
          key={teacher.id}
          style={{ height: 450, width: 600, objectFit: "contain" }}
        />
      ))}
    </div>
  );
};

export default ImageScrollInto;
