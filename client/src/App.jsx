import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
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
