import React, { useState } from 'react';
import axios from 'axios';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignup, setIsSignup] = useState(true);

  const handleSignup = async () => {
    try {
      await axios.post('http://localhost:4255/api/signup', { name, email, password });
      window.alert('Registration successful!');
    } catch (error) {
      console.error('Error creating user', error.message);
    }
  };

  const handleLogin = async () => {
    try {
      await axios.post('http://localhost:4255/api/login', { email, password });
      localStorage.setItem('name', name);
    } catch (error) {
      console.error('Error logging in', error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl w-full flex rounded-3xl shadow-2xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
        {/* Left Panel */}
        <div className="w-1/2 bg-white p-12">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-extrabold text-gray-800 mb-2 font-['Poppins']">
              {isSignup ? 'Create Account' : 'Welcome Back'}
            </h2>
            <p className="mt-2 text-lg text-gray-600 font-['Inter']">
              {isSignup ? 'Begin your journey with us' : 'Were glad to see you again'}
            </p>
          </div>

          <form className="space-y-8">
            {isSignup && (
              <div className="form-group">
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="block w-full px-4 py-3 text-lg border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200"
                  placeholder="John Doe"
                />
              </div>
            )}

            <div className="form-group">
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full px-4 py-3 text-lg border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200"
                placeholder="email@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full px-4 py-3 text-lg border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200"
                placeholder="••••••••"
              />
            </div>

            <button
              type="button"
              onClick={isSignup ? handleSignup : handleLogin}
              className="w-full flex justify-center py-4 px-4 border border-transparent rounded-xl text-lg font-medium text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transform hover:-translate-y-1 transition-all duration-200"
            >
              {isSignup ? 'Create Account' : 'Sign In'}
            </button>
          </form>
        </div>

        {/* Right Panel */}
        <div className="w-1/2 bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-500 p-12 flex flex-col items-center justify-center text-white">
          <div className="backdrop-blur-sm bg-white/10 p-8 rounded-2xl">
            <h3 className="text-3xl font-bold mb-6">
              {isSignup ? 'Already have an account?' : 'New here?'}
            </h3>
            <p className="mb-8 text-xl text-center opacity-90">
              {isSignup
                ? 'Sign in and continue where you left off'
                : 'Join us and discover amazing possibilities'}
            </p>
            <button
              onClick={() => setIsSignup(!isSignup)}
              className="px-8 py-3 border-2 border-white rounded-xl text-lg font-medium hover:bg-white hover:text-purple-600 transform hover:-translate-y-1 transition-all duration-200"
            >
              {isSignup ? 'Sign In' : 'Sign Up'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
