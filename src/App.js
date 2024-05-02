import './App.css';
import Home from './screens/home';
import Home2 from './screens/home2';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import UserLogin from './screens/userLogin';
import UserSignup from './screens/userSignup';
// import {Browser Router}

function App() {
  return (
    <div >
      <Router>
        <Routes>
          {/* <Route path='/'> */}
            <Route path='*'element={<Home/>}/>
            <Route path='/more'element={<Home2/>}/>
            <Route path='/Login' element={<UserLogin/>}/>
            <Route path='/Signup' element={<UserSignup/>}/>
          {/* </Route> */}
      </Routes>
      </Router>
    </div>
  );
}

export default App;
