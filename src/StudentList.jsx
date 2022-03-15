import Student from "./Student";

const StudentList = (props) => {
  return (  
    <>
    <h2>Student List</h2>
    {props.students.map(student =>
        <Student student={student}/>
      )}
    </>
  );
}
 
export default StudentList;