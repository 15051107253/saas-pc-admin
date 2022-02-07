import Login from '@pages/login'
import NotFound from '@pages/not-found'
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Navigate to='login' />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
