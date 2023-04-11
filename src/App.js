import './App.css';
import {Routes, Route} from 'react-router-dom';
import {Home, Contact,} from './containers';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      {/* <Route path='/Kraber9K' element={<Kraber9K/>}/>
      <Route path='/mods' element={<Mods/>}/> */}
      <Route path='/contact' element={<Contact/>}/>
      <Route path='*' element={<Home/>}/>
    </Routes>
  );
}

export default App;
