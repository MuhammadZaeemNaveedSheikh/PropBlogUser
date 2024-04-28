import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/main'

function App() {

  return (
    <main>
      <Navbar />
      <Outlet />
    </main>
  )
}

export default App
