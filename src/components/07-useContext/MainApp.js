import React, { useState } from "react";
import { NavBar } from "./NavBar";
import { UserContext } from "./UserContext";

// import { AppRouter } from "./AppRouter";

export const MainApp = () => {
  const [user, setUser] = useState({});

  return (
    <UserContext.Provider
      value={{
        user: user,
        setUser: setUser,
      }}
    >
      <NavBar />
    </UserContext.Provider>
  );
};
