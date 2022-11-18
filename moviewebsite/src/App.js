import './App.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

//Importing containers/components
import Home from './Containers/Home/Home';
import Register from './Containers/Register/Register';
import Login from './Containers/Login/Login';
//import Showcase from './Containers/Showcase/Showcase';
//import Search from './Containers/Search/Search';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      
        <Routes>

          <Route path="/" element={<Home/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          {/*<Route path="/" element={<Showcase/>}/>;*/}
          {/*<Search name={'Jim'}/>;*/}

        </Routes>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
