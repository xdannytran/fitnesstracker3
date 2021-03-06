import React, { useState } from "react";
import healthy from '../Assets/healthy.png'
import underweight from '../Assets/underweight.png'
import overweight from '../Assets/overweight.png'
import "../index.css";

function Bmi() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  let imgSrc;

  if (bmi < 1) {
    imgSrc = null;
  } else {
    if (bmi < 25) {
        imgSrc= underweight;
    } else if (bmi >= 25 && bmi < 30) {
        imgSrc= healthy;
    
    } 
    else {
        imgSrc= overweight;
    }
  }

  let calcBmi = (event) => {
    event.preventDefault();

    if (weight === 0 || height === 0) {
      alert("Please enter a valid weight and height");
    } else {
      let bmi = (weight / (height * height)) * 703;
      setBmi(bmi.toFixed(1));

      //message
      if (bmi < 25) {
        setMessage("Your are underweight");
      } else if (bmi >= 25 && bmi < 30) {
        setMessage("You are a healthy weight");
      } else {
        setMessage("You are overweight");
      }
    }
  };

  let reload = () => {
    window.location.reload();
  };

  return (
    <div className="app">
      <div className="container">
        <h2 className="center>" BMI Calculator />
        <form onSubmit={calcBmi}>
          <div>
            <label>Weight (1lbs)</label>
            <input
              value={weight}
              onChange={(event) => setWeight(event.target.value)}
            />
          </div>
          <div>
            <label>Height (in)</label>
            <input
              value={height}
              onChange={(event) => setHeight(event.target.value)}
            />
          </div>
          <div>
            <button className="btn" type="submit">
              {" "}
              Submit
            </button>
            <button className="btn btn -outline" onClick={reload} type="submit">
              {" "}
              Reload{" "}
            </button>
          </div>
        </form>

        <div className="center">
          <h3>Your BMI is: {bmi}</h3>
          <p>{message}</p>
        </div>

        <div className="img-container">
          <img src={imgSrc} alt=""></img>
        </div>
      </div>
    </div>
  );
}
export default Bmi;
