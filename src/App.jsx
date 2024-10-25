import { Routes, Route } from 'react-router-dom';
import PP from '../components/Nozimjon/PP';
import '../global.css'

export default function App() {
  return(
    <>
      <Routes>
        <Route path='/' element={<PP />} />
        {/* <Route path='/' element={<Home />} />
        <Route path='/' element={<Home />} />
        <Route path='/' element={<Home />} />
        <Route path='/' element={<Home />} />
        <Route path='*' element={<Home />} /> */}
      </Routes>
    </>
  )
}
