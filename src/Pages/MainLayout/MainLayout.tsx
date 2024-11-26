import { NavLink, Outlet } from "react-router"
import './MainLayout.css'

function MainLayout() {
  return (
    <main>
      <nav className="nav">
        
      <NavLink to="/" end>
        <button>
        Home
        </button>
      </NavLink>


      <NavLink to="/profile" end>
        <button>
        Profile
        </button>
      </NavLink>
      
      </nav>

        <Outlet />
    </main>
  )
}

export default MainLayout