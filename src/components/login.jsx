import React from "react";

const Login = ({ authService }) => {
  const onLogin = () => {
    authService.login();
  };

  return <button onClick={onLogin}>Google</button>;
};

export default Login;
