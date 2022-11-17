import './App.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

//Importing containers/components
//import Home from './Containers/Home/Home';
import Showcase from './Containers/Showcase/Showcase';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      
        <Routes>

          <Route path="/" element={<Showcase/>}/>
        </Routes>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
