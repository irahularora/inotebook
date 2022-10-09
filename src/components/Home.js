import React  from 'react'
import Addnote from './Addnote'
import Alert from './Alert'
import Navbar from './Navbar'
import Notes from "./Notes"
export default function Home(props) {
  return (
    <>
    <Navbar/>
    <Alert mess={props.alert} />
      <div className='container my-4' style={{ width: "90%", margin: "auto" }} >
       <Addnote showAlert={props.showAlert}  />
        <Notes showAlert={props.showAlert} />
      </div>
    </>
  )
}
