import React, { useState } from "react";

const userContext = React.createContext({
  state: {},
  setState: () => {},
});

const MyProvider = ({ children }) => {
  const [state, setState] = useState({ username: "", email: "", password: "" });
  return <userContext.Provider value={{ state, setState }}>{children}</userContext.Provider>;
};

export { userContext, MyProvider };
