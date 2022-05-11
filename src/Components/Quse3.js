import React from "react";
import { useState } from "react";

const Ques3 = () => {
  const [input, setInput] = useState("");
  const [disabled, setDisabled] = useState(false);

  const showQues = () => {
    setInput([...input, ""]);
    setDisabled(true);
  };

  const handleSubmit = () => {
    if (input) {
    }
  };

  return (
    <div>
      {!disabled ? (
        <button
          className="btn btn-danger"
          onClick={() => {
            showQues();
          }}
        >
          Question-3
        </button>
      ) : (
        ""
      )}

      {input.length ? (
        <div>
          <h4>Which language is best for begginers?</h4>
          <input
            type="text"
            className="mx-4"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          ></input>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Ques3;
