import React, { useState } from 'react';
import { supabase } from '../../supabaseClient';

function AuthenticationWindow() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const { user, error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;
      console.log('Signed in:', user);
    } catch (error) {
      console.error('Error signing in:', error.message);
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const { user, error } = await supabase.auth.signUp({ email, password });
      if (error) throw error;
      console.log('Signed up:', user);
    } catch (error) {
      console.error('Error signing up:', error.message);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-gray-100 rounded-lg shadow-lg">
      <form onSubmit={handleSignIn}>
        <h2 className="text-xl font-semibold mb-4">SIGN IN</h2>
        <input
          className="block w-full px-4 py-2 mb-4 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="block w-full px-4 py-2 mb-4 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="on"
        />
        <button
          type="submit"
          className="block w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Sign In
        </button>
      </form>
      <form onSubmit={handleSignUp}> 
        <button
          type="submit" 
          className="block w-full bg-green-500 text-white py-2 px-4 rounded-md mt-2 hover:bg-green-600"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default AuthenticationWindow;
