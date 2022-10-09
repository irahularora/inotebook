import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"

export default function Login(props) {
  const host = "http://localhost:5000"
  let history = useNavigate()

  const [login, setLogin] = useState({email: "",password: ""})

  const storeInput = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value })
  }

  const handlesubmit = async (e) => {
    e.preventDefault()
    const response = await fetch(`${host}/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: login.email, password: login.password })
    });
    const json = await response.json()
    if(json.success){
      localStorage.setItem('token',json.authToken)
      history('/')
      props.showAlert("LogedIn Successfully",'success')
    }
    else{
      props.showAlert(json.error,'danger')
    }
  }


  return (
    <div className='container' style={{ width: "50%" }} ><form>
      <h2>LOGIN</h2>
      <div className="form-group my-3">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input
          onChange={storeInput}
          name='email'
          type="email"
          className="form-control"
          id="email"
          aria-describedby="emailHelp"
          placeholder="Enter email"

        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input
          name='password'
          type="password"
          className="form-control"
          id="email"
          onChange={storeInput}
          placeholder="Password"
        />
      </div>
      <button onClick={handlesubmit} type="submit" className="btn btn-primary my-3">
        Login
      </button>
    </form>
    </div>
  )
}
