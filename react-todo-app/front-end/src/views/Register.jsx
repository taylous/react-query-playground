import React from 'react'
import './Sign.css';

const Register = () => {

  return (
    <div className="login">
      <h1>Register</h1>
      <form method="post">
        <input type="text" name="u" placeholder="Username" required="required" />
        <input type="password" name="p" placeholder="Password" required="required" />
        <input type="email" name="p" placeholder="E-MAIL" required="required" />
        <input type="text" name="p" placeholder="Occupation" required="required" />
        <button type="submit" className="btn btn-primary btn-block btn-large">Register</button>
      </form>
    </div>  
  )
}

export default Register;