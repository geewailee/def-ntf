import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../context/userContext.jsx";

const Navbar = () => {
  const { state } = useContext(userContext);
  return (
    <div>
      <div className='navbar'>
        <li>
          <Link to='/characters' style={{ textDecoration: "none" }}>
            Characters
          </Link>
        </li>
        <li>
          <Link to='/episodes' style={{ textDecoration: "none" }}>
            Episodes
          </Link>
        </li>
        <li>
          <Link to='/registration' style={{ textDecoration: "none" }}>
            Registration
          </Link>
        </li>
        {state.email && <li>Welcome, {state.email}</li>}
      </div>
    </div>
  );
};

export default Navbar;
