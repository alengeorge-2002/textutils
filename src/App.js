import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";


function App() {
  const [mode, setmode] = useState("light")
  const [greenMode, setGreenMode] = useState("light")
  const [modeGreen, setModeGreen] = useState("light")
  const [alert, setAlert] = useState(null)

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      showAlert(null)
    }, 3000);
  }

  const toggleMode=()=>{
  if (mode==="light") {
    console.log("dark")
    setmode("dark") 
    document.body.style.backgroundColor ="#121e6de0"
    showAlert(" Dark Mode Enabled","success")
    document.title="Text utils-Dark mode"
  }
  else{
    console.log("light")
    setmode("light")
    document.body.style.backgroundColor = "white"
    showAlert(" Light Mode Enabled", "warning")
    document.title = "Text utils-light mode"
  }
}
  const toggleGreenMode = () => {
    if (greenMode === "light") {
      setGreenMode('green')
      setModeGreen("green")
      document.body.style.backgroundColor = "green"
      showAlert(" Green Dark Mode Enabled", "success")
      document.title= "Text Utils - Green dark mode"
    }
    else {
      setGreenMode('light')
      setModeGreen("black")
      document.body.style.backgroundColor = "white"
      showAlert(" Light Mode Enabled", "success")
      document.title = "Text utils-light mode"
    }
  }
return (
    <>
    {/* <Router> */}
    <Navbar title="TextUtils" about="About" mode={mode} modeGreen={modeGreen} toggleMode={toggleMode} toggleGreenMode={toggleGreenMode} />
      <Alert alert={alert}/>
      <div className="container my-3">

      {/* <Routes> */}
          <TextArea showAlert={showAlert} heading="To Upper Case Converter" mode={mode} />   
          {/* <Route path="/About" element={<About />} /> */}
      {/* </Routes> */}
    </div>
    {/* </Router> */}
    </>
  );
}

export default App;
