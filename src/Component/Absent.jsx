function Absent(props) {
  // Absent to Present Student checking
  const absentToPresent = (student) => {
    let findPresentStudent = props.students.find(
      (item) => item.id === student.id
    );
    findPresentStudent.isPresent = !findPresentStudent.isPresent;
    props.setStudents([...props.students]);
  };
  return (
    <div className="absent">
      <h2>Absent Student</h2>
      <ul>
        {props.students
          .filter((student) => student.isPresent === false)
          .map((student) => {
            return (
              <li key={student.id}>
                <span>Name :{student.name}</span>
                <button
                  onClick={() => {
                    absentToPresent(student);
                  }}
                >
                  Present
                </button>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
export default Absent;
