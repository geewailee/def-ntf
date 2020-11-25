import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../context/userContext.jsx";

const Navbar = () => {
  const { state } = useContext(userContext);
  console.log(state);
  return (
    <div>
      <div className='navbar'>
        <li>
          <Link to='/characters'>Characters</Link>
        </li>
        <li>
          <Link to='/registration'>Registration</Link>
        </li>
        {state.email && <h3>Welcome, {state.email}</h3>}
      </div>
    </div>
  );
};
export default Navbar;
