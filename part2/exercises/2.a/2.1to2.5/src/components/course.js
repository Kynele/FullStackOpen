import React from "react";
import Header from "./header";
import Content from "./content";
import Total from "./total";

const Course = ({ course }) => {
  return course.map((singleCourse) => (
    <div>
      <Header name={singleCourse.name}></Header>
      <Content parts={singleCourse.parts}></Content>
      <Total parts={singleCourse.parts}></Total>
    </div>
  ));
};

export default Course;
