import React, { useContext,useEffect,useState } from 'react'
import { NoteContext } from '../context/notes/NoteState'

export default function User() {
    const context = useContext(NoteContext)
    const {user, getdetails} = context;
    useEffect(() => {
        if(localStorage.getItem("token")){
            getdetails()
        }
        else{
            console.log('kdj')
        }
    })

  return (
    <div>
        <h1>USERACCOUT</h1>
        <div className="container">
            <h5>Id: {user._id}</h5>
            <h5>Name: {user.name}</h5>
            <h5>Email: {user.email}</h5>
        </div>
    </div>
  )
}
