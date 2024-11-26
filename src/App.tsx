import { Route, Routes } from "react-router"
import Homepage from "./Pages/Home/Home"
import ProfilePage from "./Pages/Profile/Profile"
import MainLayout from "./Pages/MainLayout/MainLayout"
import "./Global.css"

function App() {
  return (
    <Routes>

      <Route element={<MainLayout />}>
        <Route path="/" element={<Homepage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Route> 

  </Routes>
  )
}

export default App