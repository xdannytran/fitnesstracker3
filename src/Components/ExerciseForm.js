import React, { useState, useEffect, useRef } from "react";

function ExerciseForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });

    setInput("");
  };

  return (
    <>
      <form className="exercise-form" onSubmit={handleSubmit}>
        {props.edit ? (
          <>
            <input
              type="text"
              placeholder="Update an exercise"
              value={input}
              name="text"
              className="exercise-input edit"
              onChange={handleChange}
              ref={inputRef}
            />
            <button className="exercise-button edit">Update Exercise</button>
          </>
        ) : (
          <>
            <input
              type="text"
              placeholder="Add an exercise"
              value={input}
              name="text"
              className="exercise-input"
              onChange={handleChange}
              ref={inputRef}
            />
            <button className="exercise-button">Add Exercise</button>
          </>
        )}
      </form>
    </>
  );
}

export default ExerciseForm;
