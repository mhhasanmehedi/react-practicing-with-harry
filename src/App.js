import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const [Mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ masg: message, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (Mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#212529";
      showAlert("Dark mode has been enabled", "success");
      document.title = "Textutils - Home(Dark Mode)";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#F8F9FA";
      showAlert("Light mode has been enabled", "success");
      document.title = "Textutils - Home(Light Mode)";
    }
  };

  return (
    <>
      <Navbar title="TextUtils" mode={Mode} toggleMode={toggleMode} />
      <Alert alert={alert} />

      <Routes>
        <Route
          path="/"
          element={
            <TextForm
              showAlert={showAlert}
              mode={Mode}
              heading="Enter the text to analyze below"
            />
          }
        />
        <Route path="about" element={<About mode={Mode} />} />
      </Routes>
      <div className="container "></div>
      {/* <About /> */}
    </>
  );
}

export default App;
