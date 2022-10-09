import React from 'react'

export default function Alert(props) {
    return (
        <div style={{height: '60px'}}>

        {props.mess && 
             <div className={`alert alert-${props.mess.type} alert-dismissible fade show`} role="alert">
                 <strong>{props.mess.type}:</strong> {props.mess.msg}
                 <button
                     type="button"
                     className="btn-close"
                     data-bs-dismiss="alert"
                     aria-label="Close"
                 />
             </div>}
    </div>
    )
}
