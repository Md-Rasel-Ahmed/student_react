import { useState } from "react";
import Allstudent from "./Component/Allstudent";
import Input from "./Component/Input";
import Present from "./Component/Present";
import Absent from "./Component/Absent";
// style
import "./styles/style.css";
function App() {
  const [userValue, setUserValue] = useState("");
  const [searchVal, setSearchVal] = useState("");
  const [students, setStudents] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [editablestudetn, setEditablestudetn] = useState(null);

  return (
    <div className="App">
      <div className="input-field">
        <Input
          userValue={userValue}
          setUserValue={setUserValue}
          setStudents={setStudents}
          students={students}
          isEdit={isEdit}
          setIsEdit={setIsEdit}
          editablestudetn={editablestudetn}
          setEditablestudetn={setEditablestudetn}
        />

        <div className="allstudent">
          <Allstudent
            students={students}
            setStudents={setStudents}
            isEdit={isEdit}
            setIsEdit={setIsEdit}
            userValue={userValue}
            setUserValue={setUserValue}
            editablestudetn={editablestudetn}
            setEditablestudetn={setEditablestudetn}
            searchVal={searchVal}
            setSearchVal={setSearchVal}
          />
        </div>
      </div>
      <Present students={students} setStudents={setStudents} />
      <Absent students={students} setStudents={setStudents} />
    </div>
  );
}
export default App;
