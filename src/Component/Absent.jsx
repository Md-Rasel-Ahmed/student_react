function Absent(props) {
  return (
    <div className="absent">
      <h3>ABSENT STUDENS</h3>
      <ul>
        {props.students
          .filter((student) => student.isPresent === false)
          .map((student) => {
            return (
              <li key={student.id}>
                <span>Name :{student.name}</span>
                <button
                  onClick={() => {
                    props.toogleStudent(student);
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
