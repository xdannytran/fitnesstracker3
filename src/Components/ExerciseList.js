import React, { useState } from "react";
import ExerciseForm from "./ExerciseForm";
import Exercise from "./Exercise";

function ExerciseList() {
  const [exercises, setExercises] = useState([]);

  const addExercise = (exercise) => {
    if (!exercise.text || /^\s*$/.test(exercise.text)) {
      return;
    }

    const newExercises = [exercise, ...exercises];

    setExercises(newExercises);
  };

  const updatedExercise = (exerciseId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
      setExercises((prev) =>
        prev.map((item) => (item.id === exerciseId ? newValue : item))
      );
    
  };

  const removeExercise = (id) => {
    const removeArr = [...exercises].filter((exercise) => exercise.id !== id);

    setExercises(removeArr);
  };

  const completeExercise = (id) => {
    let updatedExercises = exercises.map((exercise) => {
      if (exercise.id === id) {
        exercise.isComplete = !exercise.isComplete;
      }
      return exercise;
    });
    setExercises(updatedExercises);
  };

  return (
    <div>
      <h1>Exercise for today</h1>
      <ExerciseForm onSubmit={addExercise} />
      <Exercise
        exercises={exercises}
        completeExercise={completeExercise}
        removeExercise={removeExercise}
        updatedExercise={updatedExercise}
      />
    </div>
  );
}

export default ExerciseList;
