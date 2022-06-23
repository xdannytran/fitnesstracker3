import React, { useState } from "react";
import ExerciseForm from "./ExerciseForm";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

function Exercise({
  exercises,
  completeExercise,
  removeExercise,
  updateExercise,
}) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateExercise(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <ExerciseForm edit={edit} onSubmit={submitUpdate} />;
  }

  return exercises.map((exercise, index) => (
    <div
      className={exercise.isComplete ? "exercise-row complete" : "todo-row"}
      key={index}
    >
      <div key={exercise.id} onClick={() => completeExercise(exercise.id)}>
        {exercise.text}
      </div>
      <div className="icons">
        <RiCloseCircleLine
          onClick={() => removeExercise(exercise.id)}
          className="delete-icon"
        />
        <TiEdit
          onClick={() => setEdit({ id: exercise.id, value: exercise.text })}
          className="edit-icon"
        />
      </div>
    </div>
  ));
}
export default Exercise;
