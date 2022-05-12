import './App.css';
import {Routes, Route} from 'react-router-dom';
import {Home, Contact, Kraber9K, Mods} from './containers';
import {Navbar, Footer} from './components';

function App() {
  return (
    <div className='Filter'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Kraber9K' element={<Kraber9K/>}/>
        <Route path='/mods' element={<Mods/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='*' element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
