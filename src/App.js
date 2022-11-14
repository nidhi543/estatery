
import {Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Rent from './components/Rent';
import Home from './components/Home';


function App() {
  return (
    <div className="App">
    <Navbar/>
    <Routes>
      <Route path = '/' element ={<Home/>}/>
      <Route path = '/rent' element= {<Rent/>}/>
      
    </Routes>
    </div>
  );
}

export default App;
