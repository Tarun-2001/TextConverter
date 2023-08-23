import { useState } from 'react';
import About from './About';
import './App.css';
import Form from './Form';
import Navbar from './Navbar';
import Alert from './Alert';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

function App() {

  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null);
  const showAlert=(message, type)=>{
      setAlert({
        msg:message,
        type:type
      })
  }
  const toogleMode = ()=>{
    if(mode==='dark'){
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Enabled Light mode ", 'success')
      setTimeout(() => {
        setAlert(null)
      }, 1500);
      // document.title = 'Text conveter in Light mode'
      // setInterval(() => {
      //   document.title = 'Text conveter';  used to change title for every 2sec...
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Text conveter in Light mode'
      // }, 1500);

    }
    else{
      setMode('dark')
      document.body.style.backgroundColor = '#7b7bd5cf';
      showAlert("Enabled Dark mode ", "success")
      setTimeout(() => {
        setAlert(null)
      }, 1500);
      document.title = 'Text conveter in Dark mode'
    }
  }
  
  return (
    <div>
      <Router>
       <Navbar title='TextConverter' toogleMode={toogleMode} mode={mode}/>
      <Alert alert ={alert}/>
        <div className='container my-3'> 
        <Routes>
        <Route exact path='/' element={<Form showAlert={showAlert} setAlert={setAlert}title="Enter text here" mode={mode}/>}/>
        <Route exact path='/about' element= {< About/>}/>
        </Routes>
        </div>
      </Router>
    </div>
  );
}
export default App;