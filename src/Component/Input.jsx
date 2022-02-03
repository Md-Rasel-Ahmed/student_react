function Input(props) {
  // Take input name from input field
  const handleChange = (e) => {
    props.setUserValue(e);
  };
  //   Student Adding in the Student list
  const addStudent = (name) => {
    if (name) {
      let studentObj = {
        id: Date.now(),
        name,
      };
      props.setStudents([...props.students, studentObj]);
      props.setUserValue("");
    } else {
      alert("Please");
    }
  };
  //   Studnet update if the student editable
  const updateStudent = (eidtName) => {
    if (eidtName) {
      props.editablestudetn.name = eidtName || props.editablestudetn.name;
      props.setUserValue("");
      props.setIsEdit(false);
      props.setEditablestudetn(null);
    } else {
      alert("Please select");
    }
  };

  return (
    <div className="input">
      <input
        type="text"
        value={props.userValue}
        placeholder="Enter a Student Name"
        onChange={(e) => {
          handleChange(e.target.value);
        }}
      />
      <button
        onClick={(e) => {
          props.isEdit
            ? updateStudent(props.userValue)
            : addStudent(props.userValue);
        }}
      >
        {props.isEdit ? "Update" : "Add"}
      </button>
    </div>
  );
}
export default Input;
