import { Nav } from './Components/Navbar_Top/nav'
import { Menu } from './Components/Side_Menu/s_menu'
import './App.css'
function App() {
  return (
    <>
    <div className="app_container">
    <Nav/>
      <div className="content">
    <Menu/>
      </div>
    </div>
    </>
  )
}

export default App
