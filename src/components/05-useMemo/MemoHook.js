import React, { useMemo } from 'react'
import { useState } from 'react';
import { procesoPesado } from '../../helper/procesoPesado';
import { useCounter } from '../../hooks/useCounter'

export const MemoHook = () => {

const {counter, increment} = useCounter(500);
const [show, setShow] = useState(true);



 const memoProcesoPesado =  useMemo(() => procesoPesado(counter), [counter]);


    return (
        <div>
             <h1>useMemo</h1>
             <h3> Counter : <small> {counter} </small> </h3>
             <hr/>

             {/* <p> {procesoPesado(counter)}   </p> */}
             <p> {memoProcesoPesado} </p>

             <button type="button" className="btn btn-primary" onClick={increment}> + 1 </button>
             <button type="button" className="btn btn-primary" onClick={() =>{ setShow(!show);}}> show/hide </button>

        </div>
    )
}
