import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import Filetext from './Component/Filetext';
import { useState } from 'react';
import Alert from './Component/Alert';
// import About from './Component/About';
function App() {
  const [mode, setMode] = useState('Light')

  const [alert, setAlert] = useState(null)
  const showAlert =(message,type) =>{
    setAlert({
      msg:  message,
      type: type
  })
  setTimeout(() => {
    setAlert(null)
  }, 1500);
  }
  const toggleMode = () =>{
    if(mode ==='Light')
  {
    setMode('Dark');
    document.body.style.backgroundColor = 'grey'
    showAlert("Dark mode has been enabled", "success")
  }
  else{
    setMode('Light');
    document.body.style.backgroundColor = 'white'
    showAlert("Light mode has been enabled", "success")

  }}
  return(
    <>
    <Navbar title ="Start-up" about = "About Start-up" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container my-3">
    <Filetext showAlert={showAlert} heading = "Enter text to analyze"  mode={mode} />
    {/* <About/> */}
    </div>
    </>
  )
  }
export default App;
