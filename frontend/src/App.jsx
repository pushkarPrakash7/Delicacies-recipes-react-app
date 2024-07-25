import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import Subscription from "./components/Subcription"
import Logo from "./components/Logo"
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
 
  return (
    <div className="max-w-screen-2xl mx-auto">
      <Navbar />
      <Outlet />
      <Logo />
      <Subscription />
    </div>
  )
}

export default App
