import { useAuth } from "../context/AuthContext";

function HomePage() {
  const { user, logout } = useAuth();
  return (
    <>
      <h1> Home Page </h1>
      <h1> {user.username} </h1>
      <button onClick={logout}> Logout </button>
    </>
  );
}

export default HomePage;
