import { Navigate } from "react-router";
import "./Profile.css";

interface User {
  name?: string;
  email?: string;
  picture?: string;
}

interface ProfileProps {
  loggedInUserValue: User;
}

function Profile({ loggedInUserValue }: ProfileProps) {
  const { name, email, picture } = loggedInUserValue; // Destructure props

  if (!name) {
    return <Navigate to="/" />;
  }

  return (
    <div className="profile">
      <img src={picture} alt="user avatar" />
      <h1>{name}</h1>
      <h2>{email}</h2>
    </div>
  );
}

export default Profile;
