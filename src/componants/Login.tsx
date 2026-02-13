import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

type LocationState = {
  from?: { pathname?: string };
};

function Login() {
  const navigate = useNavigate();
  const location = useLocation();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    console.log("Login Component Rendered");
  }, []);

  const from =
    (location.state as LocationState | null)?.from?.pathname ?? "/";

  const handleLogin = () => {
    if (username === "admin" && password === "admin") {
      sessionStorage.setItem("isAuthenticated", "true");
      navigate(from, { replace: true });
      return;
    }

    alert("Invalid username or password!");
  };

  if (sessionStorage.getItem("isAuthenticated") === "true") {
    return <h2>Already logged in</h2>;
  }

  return (
    <>
      <h2>Login Page</h2>
      <h2>Enter username and password to login:</h2>

      <div>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button type="button" onClick={handleLogin}>
        Login
      </button>
    </>
  );
}

export default Login;
