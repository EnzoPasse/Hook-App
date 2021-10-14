import React, { useEffect } from "react";
import { useForm } from "../../hooks/useForm";

export const FormWithCustomHook = () => {
  const [formValues, handleInputChange] = useForm({
    name: "",
    email: "",
    psw:''
  });

  const { name, email, psw } = formValues;
  
useEffect(() => {
    console.log('cambio el email');
}, [email])
  

const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
}

  return (
    <form  onSubmit = {handleSubmit} >
      <h1>FormWithCustomHook</h1>
      <hr />

      <div className="form-group">
        <input
          type="text"
          className="form-control"
          name="name"
          placeholder="pone tu nombre"
          value={name}
          autoComplete="off"
          onChange={handleInputChange}
        />

        <input
          type="email"
          className="form-control"
          name="email"
          placeholder="algo@algo.com"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />

        <input
          type="password"
          className="form-control"
          name="psw"
          placeholder="*****"
          autoComplete="off"
          value={psw}
          onChange={handleInputChange}
        />
      </div>


      <button type="submit" className="btn btn-outline-primary"
      > Guardar</button>

    </form>
  );
};
