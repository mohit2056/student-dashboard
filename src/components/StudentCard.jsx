function StudentCard({ name, roll, marks }) {
  const isTopper = marks >= 90;

  return (
    <div className={`student-card ${isTopper ? "topper" : ""}`}>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Roll No:</strong> {roll}</p>
      <p><strong>Marks:</strong> {marks}</p>
    </div>
  );
}

export default StudentCard;