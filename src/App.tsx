import { Route, Routes } from "react-router";
import Homepage from "./Pages/Home/Home";
import ProfilePage from "./Pages/Profile/Profile";
import MainLayout from "./Pages/MainLayout/MainLayout";
import "./Global.css";
import { useState } from "react";

function App() {
  type User = {
    name?: string;
    email?: string;
    picture?: string;
  }

  const [loggedInUserValue, setLoggedInUserValue] = useState<User>({})

  return (
    <Routes>
      <Route element={<MainLayout />}>

        <Route 
        path="/" 
        element={<Homepage 
        setLoggedInUserValue={setLoggedInUserValue} 
        />} 
        />

        <Route
          path="/profile"
          element={<ProfilePage loggedInUserValue={loggedInUserValue} />}
        />
      </Route>
    </Routes>
  );
}

export default App;
