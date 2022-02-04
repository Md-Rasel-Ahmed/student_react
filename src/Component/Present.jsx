function Present(props) {
  return (
    <div className="present">
      <h3>PRESENT STUDENTS</h3>
      <ul>
        {props.students
          .filter((student) => student.isPresent === true)
          .map((student) => {
            return (
              <li key={student.id}>
                <span>Name :{student.name}</span>

                <button
                  onClick={() => {
                    props.toogleStudent(student);
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
