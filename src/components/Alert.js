import React from "react";

const Alert = ({ alert }) => {
  let customAlert = {
    position: "absolute",
    bottom: "2%",
    right: "2%",
  };

  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    alert && (
      <div
        className={`alert alert-${alert.type} border-bottom border-success`}
        style={customAlert}
      >
        <strong>{capitalize(alert.type)}!</strong>: {alert.masg}
      </div>
    )
  );
};

export default Alert;
