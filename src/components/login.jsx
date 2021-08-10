import React from "react";

const Login = ({ authService }) => {
  const onLogin = (e) => {
    authService.login(e.currentTarget.textContent);
  };

  const onLogout = () => {
    authService.logout();
  };

  return (
    <div>
      <button onClick={onLogin}>Google</button>
      <button onClick={onLogin}>Github</button>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default Login;
