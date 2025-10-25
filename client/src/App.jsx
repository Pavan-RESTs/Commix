import AuthPage from "./pages/auth-page";
import HomePage from "./pages/home-page";
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={ <HomePage/> }/>
        <Route path='/auth' element={ <AuthPage/> }/>
      </Routes>
    </>
  );
}

export default App;
