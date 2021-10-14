import { PageHeader } from "antd";
import TextArea from "rc-textarea";
import React, { useContext } from "react";
import { UserContext } from "./UserContext";

export const HomeScreen = () => {
  const {user} = useContext(UserContext);

  return (
    <>
      <PageHeader className="site-page-header" title="Home" />
      <TextArea rows={4}
         value = {JSON.stringify(user)}  
      /> 

    </>
  );
};
