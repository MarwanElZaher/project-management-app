import React, { useState } from 'react';
import { supabase } from '../../supabaseClient';
import Registration from '../Registration';

function AuthenticationWindow() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistring, setIsRegistring] = useState(false);

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



  return (
    <div class="min-h-screen flex justify-center items-center bg-gray-100">
       <div class="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
      {isRegistring ? <Registration showSignInWindow={setIsRegistring} /> :
      
        
     <>
      <form onSubmit={handleSignIn}>
        <h2 className="text-xl font-semibold mb-4 mx-2">SIGN IN</h2>
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
        <button
          onClick={()=>{setIsRegistring(!isRegistring)}}
          type="submit" 
          className="block w-full bg-green-500 text-white py-2 px-4 rounded-md mt-2 hover:bg-green-600"
        >
          Sign Up
         </button>
            </> 
       }
    </div>
      </div>
  );
}

export default AuthenticationWindow;
