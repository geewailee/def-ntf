import React, { useState, useContext } from "react";
import { withRouter } from "react-router-dom";
import { userContext } from "../context/userContext.jsx";
const Registration = props => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { state, setState } = useContext(userContext);

  const onClick = e => {
    e.preventDefault();
    alert(`${name} has signed up!`);
    setState({ ...state, name: name, email: email, password: password });
    props.history.push("/");
  };

  return (
    <div>
      <form>
        <label htmlFor='name'>Name </label>
        <input type='text' value={name} onChange={e => setName(e.target.value)} />
        <label htmlFor='email'>Email</label>
        <input type='text' value={email} onChange={e => setEmail(e.target.value)} />
        <label htmlFor='password'>Password</label>
        <input type='text' value={password} onChange={e => setPassword(e.target.value)} />
        <button type='submit' onClick={onClick}>
          Register
        </button>
      </form>
    </div>
  );
};

export default withRouter(Registration);
