import { useEffect } from "react";
import { useLocation,useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();
  const location = useLocation();


  useEffect(() => {
    console.log("Logout Component Rendered");
  }, []);

  return (
    <>
      <h2>Logout Page</h2>
      <button
      onClick={() => {
        sessionStorage.removeItem("isAuthenticated");
        navigate("/login", { replace: true, state: { from: location } });
      }}
    >
      Logout
    </button>
    </>
  );
}

export default Logout;