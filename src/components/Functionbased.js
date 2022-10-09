import React, { useEffect, useReducer, useState } from 'react'
import useTitle from './useTitle'
import {HOC,HOCred} from './HOC'



export default function Functionbased() {
  return (
    <div className='container'>
      <HOC cmp={useTitle} color='green' />
      <HOCred cmp={useTitle}/>
    </div>
  )
}


