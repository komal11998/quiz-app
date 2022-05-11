import React from "react";
import { useState } from "react";

const Ques1 = () => {
  const [input, setInput] = useState("");
  const [disabled, setDisabled] = useState(false);

  const showQues = () => {
    setInput([...input, ""]);
    setDisabled(true);
  };

  const handleSubmit = () => {};

  return (
    <div>
      {!disabled ? (
        <button
          type="text"
          className="btn btn-danger"
          onClick={() => {
            showQues();
          }}
        >
          Question-1
        </button>
      ) : (
        ""
      )}

      {input.length ? (
        <div>
          <h4>Which is your fav programming language?</h4>
          <input
            className="mx-4"
            type="text"
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

export default Ques1;
