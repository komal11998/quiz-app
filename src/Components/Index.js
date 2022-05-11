import React from "react";
import { useState } from "react";
import Ques1 from "./Ques1";
import Ques2 from "./Ques2";
import Ques3 from "./Quse3";

const Index = () => {
  const [answers, setAnswers] = useState([]);

  const submitQuiz = () => {
    alert("you answered all the questons");
  };

  return (
    <div className="container-fluid d-flex row center ">
      <h1>Quiz</h1>

      <div className="my-5">
        <Ques1 />
      </div>

      <div className="my-5">
        <Ques2 />
      </div>

      <div className="my-5">
        <Ques3 />
      </div>

      <div>
        <button
          type="submit"
          className="btn btn-success my-5"
          onClick={submitQuiz}
        >
          Submit Test
        </button>
      </div>
    </div>
  );
};

export default Index;
