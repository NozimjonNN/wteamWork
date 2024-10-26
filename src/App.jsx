import { Routes, Route } from 'react-router-dom';
import PP from '../components/Nozimjon/PP';
import Unfound from '../components/Nozimjon/unfound';
import '../global.css'
import Home from './componets/Asadber/Home';
export default function App() {
  return(
    <>
      <Routes>
        <Route path='/pp' element={<PP />} />
        <Route path='/' element={<Home />} />
        <Route path='/' element={<Home />} />
        <Route path='/' element={<Home />} />
        <Route path='/' element={<Home />} />
        <Route path='*' element={<Unfound />} />
      </Routes>
    </>
  )
}
