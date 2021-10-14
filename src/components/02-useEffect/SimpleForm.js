import React from "react";
import { useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
  });

  const { name, email } = formState;

  const handleInputChange = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  };

  return (
    <>
      <h1>useEffect</h1>
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
      </div>

      {name === "Admin" && <Message />}
    </>
  );
};
