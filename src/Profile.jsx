import { useState } from "react";

function Profile() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      <h1 className =" text-2xl font-bold p-2 m-4 flex justify-center">Personal Information</h1>


      <button className="bg-blue-500 text-white p-2 rounded m-2 h-10 w-32 flex justify-center" onClick={handleLogin}>Login</button>
      {isLoggedIn ? (
        <p>Welcome, User!</p>
      ) : (
        <p>Please log in to view your profile.</p>
      )}
    </div>
  );
}

export default Profile;