import React, { useState } from 'react';
import LoginForm from './loginForm';
import SignupForm from './SignupForm';
import Swal from 'sweetalert2';
import './output.css';

const App = () => {
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [users, setUsers] = useState([]);

  const handleSignup = (userData) => {
    setUsers([...users, userData]);
    setIsSignedUp(true);
  };

  const handleLogin = (loginData) => {
    const user = users.find(user => user.email === loginData.email && user.password === loginData.password);
    if (user) {
      setIsLoggedIn(true);
      Swal.fire({
        title: 'Login Successful!',
        text: 'Selamat anda telah berhasil membuat form ini!',
        icon: 'success',
        confirmButtonText: 'OK'
      });
    } else {
      Swal.fire({
        title: 'Login Failed!',
        text: 'Incorrect email or password.',
        icon: 'error',
        confirmButtonText: 'Try Again'
      });
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsSignedUp(false);
    Swal.fire({
      title: 'Logout Successful!',
      text: 'You have successfully logged out.',
      icon: 'success',
      confirmButtonText: 'OK'
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-8">Uji Coba</h1>
      {isLoggedIn ? (
        <div className="flex flex-col items-center">
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700"
          >
            Logout
          </button>
        </div>
      ) : isSignedUp ? (
        <LoginForm onLogin={handleLogin} />
      ) : (
        <SignupForm onSignup={handleSignup} />
      )}
    </div>
  );
};

export default App;
