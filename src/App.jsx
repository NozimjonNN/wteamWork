import { Routes, Route } from 'react-router-dom';
import '../global.css'

export default function App() {
  return(
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/' element={<Home />} />
        <Route path='/' element={<Home />} />
        <Route path='/' element={<Home />} />
        <Route path='/' element={<Home />} />
        <Route path='*' element={<Home />} />
      </Routes>
    </>
  )
}
