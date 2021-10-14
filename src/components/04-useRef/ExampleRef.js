import React from 'react'
import { useState } from 'react'
import { MultipleCustomHook } from '../03-example/MultipleCustomHook'

export const ExampleRef = () => {
 
const [show, setShow] = useState(false)

    return (
        <>
          <h1> useRef  </h1>  
          <hr/>

          {
           show && <MultipleCustomHook />

          }

          <button type="button" className="btn btn-primary" onClick={()=>setShow(!show)}>show/hide</button>

          
        </>
    )
}
