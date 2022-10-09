import React, { useContext, useEffect } from 'react'
import { NoteContext } from '../context/notes/NoteState'
import Alert from './Alert';
import Navbar from './Navbar';

export default function User(props) {
    const context = useContext(NoteContext)
    const { user, getdetails } = context;
    useEffect(() => {
        if (localStorage.getItem("token")) {
            getdetails()
        }
        else {
            console.log('kdj')
        }
    })

    return (
        <div>
            <Navbar />
            <Alert mess={props.alert} />
            <h1>USERACCOUT</h1>
            <div className="container">
                <h5>Id: {user._id}</h5>
                <h5>Name: {user.name}</h5>
                <h5>Email: {user.email}</h5>
            </div>
        </div>
    )
}
