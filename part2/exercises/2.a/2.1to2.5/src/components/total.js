import React from "react";
const Total = ({ parts }) => {
  const total = parts.reduce((s, p) => {
    return p.exercises + s;
  }, 0);
  return (
    <div>
      <b>Total of {total} exercises</b>
    </div>
  );
};

export default Total;
