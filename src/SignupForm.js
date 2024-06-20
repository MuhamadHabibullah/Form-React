import React, { useState } from 'react';
import Swal from 'sweetalert2';

const SignupForm = ({ onSignup }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = { username, email, password };
        console.log('Signup Data:', { username, email });
        onSignup(userData);
        Swal.fire({
            title: 'Signup Successful!',
            text: 'Your account has been created.',
            icon: 'success',
            confirmButtonText: 'OK'
        });
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-8 shadow-md rounded mt-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
            <div className="mb-4">
                <label className="block text-gray-700">Username:</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    className="w-full px-3 py-2 border rounded"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-3 py-2 border rounded"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full px-3 py-2 border rounded"
                />
            </div>
            <button type="submit" className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-700">Sign Up</button>
        </form>
    );
};

export default SignupForm;
