import { Button, PageHeader } from "antd";
import TextArea from "rc-textarea";
import React, { useContext } from "react";
import { UserContext } from "./UserContext";

export const AboutScreen = () => {
  
  const { user, setUser } = useContext(UserContext);
 
  const handleLogout = () => {
    setUser({});
  };

  return (
    <>
      <PageHeader className="site-page-header" title="About" />

      <TextArea rows={4} value={JSON.stringify( user )} />
       <br/>
 
      <Button onClick={handleLogout}> Logout  </Button>
    </>
  );
};
