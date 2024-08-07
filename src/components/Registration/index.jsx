import React, { useState } from "react"
import { supabase } from '../../supabaseClient';

const Registration = ({ showSignInWindow }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('')
   

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            const { user, error } = await supabase.auth.signUp({ email, password });
            if (error) throw error;
            console.log('Signed up:', user);
          } catch (error) {
            console.error('Error signing up:', error.message);
          }
    }

    return (
        <>
            <form onSubmit={handleSignUp}>
                <div className="flex justify-between align-middle mb-4 ">
                <h2 className="text-xl font-semibold ">SIGN UP</h2>
                <button onClick={() => { showSignInWindow(false) }}>back to sign in</button> 
                </div>
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
        <input
          className="block w-full px-4 py-2 mb-4 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
          type="text"
          placeholder="FullName"
          title="FullName"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
                />
        <input
          className="block w-full px-4 py-2 mb-4 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
          type="number"
          placeholder="PhoneNumber"
          title="PhoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
            />
                
        
        <button
          onClick={()=>{handleSignUp}}
          type="submit" 
          className="block w-full bg-green-500 text-white py-2 px-4 rounded-md mt-2 hover:bg-green-600"
        >
          Sign Up
         </button>
      </form>
       
             
            </>
    )
}
export default Registration