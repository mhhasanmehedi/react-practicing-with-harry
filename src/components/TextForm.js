import React, { useState } from "react";

const TextForm = ({ heading, mode, showAlert }) => {
  const [text, setText] = useState("");

  //   Uppercase text function
  const handleUpClick = () => {
    setText(text.toUpperCase());
    showAlert("Converted to uppercase", "success");
  };

  //   Lowercase text function
  const handleLoClick = () => {
    setText(text.toLowerCase());
    showAlert("Converted to Lowercase", "success");
  };

  //   Reverse text function
  const handleReverse = () => {
    setText(text.split("").reverse().join(""));
    showAlert("Converted to Reverse", "success");
  };

  //   Clear Text function
  const handleClearText = () => {
    setText("");
    showAlert("Clear input field", "success");
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

    showAlert("Download text file", "success");
  };

  //   Title case text function
  const handleTitleCase = () => {
    setText(
      text
        .split(" ")
        .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
        .join(" ")
    );

    showAlert("Converted to Titlecase", "success");
  };

  // Onchange function
  const handleChange = (e) => {
    setText(e.target.value);
  };

  // Remove extra spaces function
  const handleRemoveExtraSpace = () => {
    setText(text.replace(/\s+/g, " ").trim());

    showAlert("Remove extra space", "success");
  };

  // Copy all text
  const handleCopy = () => {
    navigator.clipboard.writeText(text);

    showAlert("Copy to clipboard", "success");
  };

  return (
    <div style={{ color: mode === "light" ? "#212529" : "#F8F9FA" }}>
      <div className="container">
        <h1>{heading}</h1>
        <div className="mb-3">
          <textarea
            style={{
              background: mode === "light" ? "#F8F9FA" : "#212529",
              color: mode === "light" ? "#212529" : "#F8F9FA",
            }}
            className="form-control"
            onChange={handleChange}
            value={text}
            id="myBox"
            rows="10"
          ></textarea>
        </div>
        <button
          className="btn btn-info me-2 mb-2"
          onClick={() => handleUpClick()}
        >
          Convert to uppercase
        </button>
        <button className="btn btn-info me-2 mb-2" onClick={handleLoClick}>
          Convert to lowercase
        </button>
        <button className="btn btn-info me-2 mb-2" onClick={handleTitleCase}>
          Title case
        </button>
        <button className="btn btn-info me-2 mb-2" onClick={handleReverse}>
          Reverse case
        </button>
        <button
          className="btn btn-info me-2 mb-2"
          onClick={handleRemoveExtraSpace}
        >
          Remove Extra Space
        </button>
        <button className="btn btn-info me-2 mb-2" onClick={downloadTxtFile}>
          Download Text
        </button>
        <button className="btn btn-info me-2 mb-2" onClick={handleCopy}>
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
    </div>
  );
};

export default TextForm;
