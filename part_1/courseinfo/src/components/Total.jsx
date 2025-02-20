const Total = ({ course }) => {
  const count = course.parts.reduce((sum, part) => sum + part.exercises, 0);

  return <p>Total Amount of Exercises: {count}</p>;
};

export default Total;
