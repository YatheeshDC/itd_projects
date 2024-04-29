import logo from './logo.svg';
import './App.css';
import Home from './screens/home';
import Home2 from './screens/home2';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home3 from './screens/home3';
// import {Browser Router}

function App() {
  return (
    <div >
      <Router>
        <Routes>
          <Route path='/'>
            <Route index element={<Home/>}/>
            <Route path='/more'element={<Home2/>}/>
            <Route path='/loginn' element={<Home3/>}/>
          </Route>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
