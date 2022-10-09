import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Signup(props) {
  const host = "http://localhost:5000"
  let history = useNavigate()

  const [signup, setSign] = useState({ name: "", email: "", password: "", cpassword:"" })

  const storeInput = (e) => {
    setSign({ ...signup, [e.target.name]: e.target.value })
  }

  const handlesubmit = async (e) => {
    e.preventDefault()
    if(signup.password === signup.cpassword){
      console.log(signup.cpassword)
      const response = await fetch(`${host}/api/auth/createuser/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: signup.name, email: signup.email, password: signup.password })
      });
      const json = await response.json()
      if (json.success) {
        localStorage.setItem('token', json.authToken)
        history('/')
        props.showAlert("Account Register Successfully",'success')
      }
      else {
        props.showAlert(json.error,'danger')
      }
    }
    else{
      props.showAlert('Password and Confirm Password Must be Same','danger')
    }
  }



  return (
    <div className='container' style={{ width: "50%" }} ><form>
      <h2>Sign Up</h2>
      <div className="form-group my-3">
        <label htmlFor="exampleInputEmail1">Name</label>
        <input
          onChange={storeInput}
          name='name'
          type="name"
          className="form-control"
          id="name"
          placeholder="Enter Name"

        />
      </div>
      <div className="form-group my-3">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input
          onChange={storeInput}
          name='email'
          type="email"
          className="form-control"
          id="email"
          aria-describedby="emailHelp"
          placeholder="Enter Email"

        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input
          name='password'
          type="password"
          className="form-control"
          id="password"
          onChange={storeInput}
          placeholder="Password"
        />
      </div>
      <div className="form-group my-3">
        <label htmlFor="exampleInputPassword1">Confirm Password</label>
        <input
          name='cpassword'
          type="password"
          className="form-control"
          id="cpassword"
          onChange={storeInput}
          placeholder="Confirm Password"
        />
      </div>
      <button onClick={handlesubmit} type="submit" className="btn btn-primary my-3">
        Sign Up
      </button>
    </form>
    </div>
  )
}
