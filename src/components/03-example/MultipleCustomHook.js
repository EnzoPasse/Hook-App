import React from "react";
import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";

export const MultipleCustomHook = () => {

 
 
  const {counter, increment} =  useCounter(1); 
  
  const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
  
  const { author, quote } = !!data && data[0]; // si existe data, entonces es igual a la data[0]

  return (
    <>
      <h1>Breaking Bad Quotes</h1>
      <hr />

      {
      loading ? 
      (
        <div className="alert alert-info text-center"> Loading ... </div>
      )
       :
      (
        <blockquote className="blockquote text-end">
          <p className="mb-4"> {quote}</p>
          <footer className="blockquote-footer">{author}</footer>
        </blockquote>
      )
      }

      <button type="button" className="btn btn-primary"
      onClick={  increment }>Siguiente quote</button>
    </>
  );
};
