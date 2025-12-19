import { useState } from "react";
import { classesData } from "../data";
import StudentCard from "./StudentCard";
import "./../App.css";

function Dashboard() {
  const [data] = useState(classesData);
  const [search, setSearch] = useState("");
  const [show, setShow] = useState(true);

  const filteredClasses = data.map((cls) => ({
    ...cls,
    students: cls.students.filter((student) =>
      student.name.toLowerCase().includes(search.toLowerCase())
    ),
  }));

  // Summary calculation
  const allStudents = filteredClasses.flatMap((cls) => cls.students);
  const totalStudents = allStudents.length;
  const avgMarks =
    totalStudents > 0
      ? (allStudents.reduce((sum, s) => sum + s.marks, 0) / totalStudents).toFixed(2)
      : 0;

  return (
    <div className="dashboard">
      <button onClick={() => setShow(!show)} style={{ marginBottom: 20 }}>
        {show ? "Hide Classes" : "Show Classes"}
      </button>

      <input
        type="text"
        placeholder="Search student by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginBottom: 20, padding: 8, width: "100%" }}
      />

      {/* Summary Section */}
      <div style={{ marginBottom: 20, padding: 10, background: "#eef" }}>
        <p><strong>Total Students:</strong> {totalStudents}</p>
        <p><strong>Average Marks:</strong> {avgMarks}</p>
      </div>

      {show &&
        filteredClasses.map((cls, classIndex) => (
          <div key={classIndex} className="class-section">
            <h2>{cls.className}</h2>
            {cls.students.length > 0 ? (
              cls.students.map((student) => (
                <StudentCard
                  key={student.id}
                  name={student.name}
                  roll={student.roll}
                  marks={student.marks}
                />
              ))
            ) : (
              <p style={{ color: "gray" }}>No students found</p>
            )}
          </div>
        ))}
    </div>
  );
}

export default Dashboard;