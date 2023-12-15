import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './component/login/Login';
import Signup from './component/signup/Signup';
import Signupone from './component/signupone/Signupone';
import Loginone from './component/loginone/Loginone';
import Bootstrap from "./component/bootstrap/Bootstrap";

function App() {
  return (
    <div >
      <Routes>
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/signup' element={<Signup />} />
        <Route exact path='/signupone' element={<Signupone />} />
        <Route exact path='/loginone' element={<Loginone />} />
        <Route exact path="/bootstrap" element={<Bootstrap/>}/>
      </Routes>
    </div>
  );
}

export default App;
