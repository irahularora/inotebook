import React from 'react'

const HOC = (props) => {
    return( <div style={{background: props.color, display: "flex", justifyContent:"center"}}><props.cmp/></div>)
}
const HOCred = (props) => {
    return( <div style={{background: "red", display: "flex", justifyContent:"center"}}><props.cmp/></div>)
}

export {HOC,HOCred}
