import { Button, PageHeader } from "antd";
import { UserContext } from "./UserContext";
import React, { useContext } from "react";

export const LoginScreen = () => {
  
const {setUser} = useContext(UserContext)


  const handleLogin = ()=> {
    setUser({
      id:123,
      name:'Enzo Passetti',
      email:'enzo@gmail.com'
    })
  }
  
  return (
    <>
      <PageHeader className="site-page-header" title="Login" />

      <Button onClick={handleLogin}> Login </Button>

    </>
  );
};
