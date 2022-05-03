import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import Alert from './components/Alert'
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

// <..................IMPORTANT.............................>
// I commented out the Roter part from the whole app so that i can easily deploy on git pages


function App() {

  
  const [mode, setmode] = useState('light');

  const [switchText, setswitchText] = useState('Light Mode')

  const [alert, setAlert] = useState(null)


  const showAlert=(message, type)=>{
    setAlert({
      msg: message,
      type:type,
    })

    setTimeout( ()=>{
      setAlert(null)
    },1500) //through setTimeout the alert box will close after 1500 ms or 1.5ms
  }

  const toggleMode = () => {
    if(mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor = '#00003f'; //to change the background color
      setswitchText('Dark Mode');
      
      showAlert("Dark mode has been enabled", "success") 
    }
    else{
      setmode('light');
      document.body.style.backgroundColor = 'white';
      setswitchText('Light Mode')

      showAlert("Light mode has been enabled", "success")
    }
  }

  return (
  <>
    {/* <Router> */}
      {/* <Navbar title = "Text-Utils" /> */}
      <Navbar title = "TextUtils" mode={mode} toggleMode={toggleMode} switchText={switchText}/> 
        {/* making a prop mode and adding the state mode we made above , and same for toggleMode creating a prop to call the function togglemode above */}

      <div className="container my-3">
      <Alert alert = {alert}/>
        {/* <Routes> */}
          {/* <Route exact path="/" element={<TextForm  heading ="Enter the text to be analyzed" mode={mode} showAlert={showAlert}/>}/> */}
{/* 
          I have commented the React router part so that i can deploy easily on github pages 
          so writing the TextForm part here below again */}
          <TextForm  heading ="Enter the text to be analyzed" mode={mode} showAlert={showAlert}/>
          {/* adding showAlert to every button see above */}
          {/* <Route exact path="/about" element={<About />}/> */}
        {/* </Routes> */}
    
      </div>
    {/* </Router> */}
  </>
  );
}

export default App;
