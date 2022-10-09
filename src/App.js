import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import Login from './components/Login';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { useState } from 'react';
import NoteState from "./context/notes/NoteState"
import Signup from './components/Signup';
import Alert from './components/Alert';
import User from './components/User';
import Functionbased from './components/Functionbased';
import { Modal } from './Modal';

function App() {

  const [alert, setAlert] = useState(null)

  const showAlert = (msg, type) => {
    setAlert({
      msg: msg,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }

  return (
    <NoteState>
      <Router>
        <Navbar showAlert={showAlert} />
        <Alert mess={alert} />
        <div className="container">
          <Routes>
            <Route exact path='/' element={<Home showAlert={showAlert} />}> </Route>
            <Route exact path='/about' element={<About />}> </Route>
            <Route exact path='/user' element={<User />}> </Route>
            <Route exact path='/login' element={<Login showAlert={showAlert} />}> </Route>
            <Route exact path='/signup' element={<Signup showAlert={showAlert} />}> </Route>
          </Routes>
        </div>
      </Router>
      <Functionbased/>

    </NoteState>
  );
}

export default App;
