import Score from "./Score";

const Student = (props) => {
  return (
    <>
      <div>
        <h1>{props.student.name}</h1>
        <h3>Bio:</h3>
        {props.student.bio}
        <h2>Scores:</h2>
        {props.student.scores.map(score =>
          <Score date={score.date} score={score.score}/>
        )}
      </div>
    </>  
  );
}

export default Student;