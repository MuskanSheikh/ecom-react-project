import './App.css';
import Login from './Component/Login';
import Register from './Component/Registration';
import Forgot from './Component/Forgot';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div >
      <Router>
        <Routes>
          <Route   exact path="/" element={<Register/>}/>
          <Route   exact path="/login-page" element={<Login/>}/>
          <Route   exact path="/forgot-password-page" element={<Forgot/>}/>
          <Route   exact path="/signin-page" element={<Register/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
