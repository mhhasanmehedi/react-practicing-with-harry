import React, { useState } from "react";

const TextForm = ({ heading }) => {
  const [text, setText] = useState("");

  //   Uppercase text function
  const handleUpClick = () => {
    setText(text.toUpperCase());
  };

  //   Lowercase text function
  const handleLoClick = () => {
    setText(text.toLowerCase());
  };

  //   Reverse text function
  const handleReverse = () => {
    setText(text.split("").reverse().join(""));
  };

  //   Clear Text function
  const handleClearText = () => {
    setText("");
  };

  //   Download text function
  const downloadTxtFile = () => {
    const element = document.createElement("a");
    const file = new Blob([text], {
      type: "text/plain;charset=utf-8",
    });
    element.href = URL.createObjectURL(file);
    element.download = "myFile.txt";
    document.body.appendChild(element);
    element.click();
  };

  //   Title case text function
  const handleTitleCase = () => {
    setText(
      text
        .split(" ")
        .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
        .join(" ")
    );
  };

  // Onchange function
  const handleChange = (e) => {
    setText(e.target.value);
  };

  // Remove extra spaces function
  const handleRemoveExtraSpace = () => {
    setText(text.replace(/\s+/g, " ").trim());
  };

  return (
    <>
      <div className="container">
        <h1>{heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            onChange={handleChange}
            value={text}
            id="myBox"
            rows="10"
          ></textarea>
        </div>
        <button className="btn btn-info m-2" onClick={() => handleUpClick()}>
          Convert to uppercase
        </button>
        <button className="btn btn-info m-2" onClick={handleLoClick}>
          Convert to lowercase
        </button>
        <button className="btn btn-info m-2" onClick={handleTitleCase}>
          Title case
        </button>
        <button className="btn btn-info m-2" onClick={handleReverse}>
          Reverse case
        </button>
        <button className="btn btn-info m-2" onClick={handleRemoveExtraSpace}>
          Remove Extra Space
        </button>
        <button className="btn btn-info m-2" onClick={downloadTxtFile}>
          Download Text
        </button>
        <button
          className="btn btn-info m-2"
          onClick={() => navigator.clipboard.writeText(text)}
        >
          Copy Text
        </button>
        <button className="btn btn-info" onClick={handleClearText}>
          Clear Text
        </button>
      </div>

      <div className="container my-2">
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").filter((item) => item !== "").length}
          words and {text.length} characters
        </p>
        <p>
          {0.008 * text.split(" ").filter((item) => item !== "").length} Minute
          read
        </p>

        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
};

export default TextForm;
