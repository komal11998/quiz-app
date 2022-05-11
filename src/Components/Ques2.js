import React from "react";
import { useState } from "react";

const Ques2 = () => {
  const [input, setInput] = useState("");
  const [disabled, setDisabled] = useState(false);

  const showQues = () => {
    setInput([...input, ""]);
    setDisabled(true);
  };

  const handleSubmit = (index) => {};

  return (
    <div>
      {!disabled ? (
        <button
          className="btn btn-danger"
          onClick={() => {
            showQues();
          }}
        >
          Question-2
        </button>
      ) : (
        ""
      )}

      {input.length ? (
        <div>
          <h4>Which is your non-fav programming language?</h4>
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

export default Ques2;
