import React from "react";
import Part from "./part";
const Content = (course) => {
  return (
    <div>
      {course.parts.map((part) => (
        <Part name={part.name} exercises={part.exercises} key={part.id}></Part>
      ))}
    </div>
  );
};

export default Content;
