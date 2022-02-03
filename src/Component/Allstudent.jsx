import "../styles/style.css";
function Allstudent(props) {
  // Edit students Name
  const editHandle = (e) => {
    props.setIsEdit(true);
    let findStudent = props.students.find((item) => {
      return item.id === e.id;
    });
    props.setEditablestudetn(findStudent);
    props.setUserValue(e.name);
  };
  //   Delete Student
  const deleteStudent = (student) => {
    let newStudent = props.students.filter((item) => item.id !== student.id);
    props.setStudents(newStudent);
  };
  //   Present Students
  const present = (student) => {
    let pStudent = props.students.find((item) => item.id === student.id);
    if (pStudent.isPresent === undefined) {
      pStudent.isPresent = true;
      props.setStudents([...props.students]);
    } else if (pStudent.isPresent === true) {
      alert("Student allreday Present");
    } else {
      alert("Student already Absent");
    }
  };
  //   Absent Students
  const Absent = (student) => {
    let pStudent = props.students.find((item) => item.id === student.id);
    if (pStudent.isPresent === undefined) {
      pStudent.isPresent = false;
      props.setStudents([...props.students]);
    } else if (pStudent.isPresent === false) {
      alert("Student allreday Absent");
    } else {
      alert("Student already Present");
    }
  };
  // Search handler
  const search = (e) => {
    props.setSearchVal(e);
    // if (e.match(//)) {
    //   console.log("ok");
    // } else {
    //   console.log("no");
    // }
  };
  return (
    <div className="allStudents">
      <h3>ALL STUDENTS</h3>
      <input
        type="text"
        placeholder="Search Student"
        value={props.serachVal}
        onChange={(e) => {
          search(e.target.value);
        }}
      />
      <ul>
        {props.students.map((student) => {
          return (
            <li key={student.id}>
              <span> Name: {student.name}</span>
              <button
                onClick={(e) => {
                  editHandle(student);
                }}
              >
                Edit
              </button>
              <button
                onClick={(e) => {
                  deleteStudent(student);
                }}
              >
                Delete
              </button>
              <button
                onClick={(e) => {
                  present(student);
                }}
              >
                Present
              </button>
              <button
                onClick={(e) => {
                  Absent(student);
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
export default Allstudent;
