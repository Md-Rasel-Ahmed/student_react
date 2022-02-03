function Present(props) {
  // Present to absent  Student Checking
  const presetToAbsent = (student) => {
    let findPresentStudent = props.students.find(
      (item) => item.id === student.id
    );
    findPresentStudent.isPresent = !findPresentStudent.isPresent;
    props.setStudents([...props.students]);
  };

  return (
    <div className="present">
      <h2>Present Student</h2>
      <ul>
        {props.students
          .filter((student) => student.isPresent === true)
          .map((student) => {
            return (
              <li key={student.id}>
                <span>Name :{student.name}</span>

                <button
                  onClick={() => {
                    presetToAbsent(student);
                  }}
                >
                  Absent
                </button>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
export default Present;
