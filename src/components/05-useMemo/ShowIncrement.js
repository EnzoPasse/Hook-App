import React from 'react'

export const ShowIncrement = React.memo(({increment}) => {

console.log('me volvi a genenerar :(' );

    return (
        <button type="button" 
                className="btn btn-primary"
                onClick={ () =>{ increment (5) } }> Incrementar</button>
    )
})
