import { useAuth } from "../hooks/useAuth";

function HomePage() {
  const { user } = useAuth();
  return (
    <>
      <h1> Home Page </h1>
      <h1> {user.username} </h1>
    </>
  );
}

export default HomePage;
