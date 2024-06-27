import { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import { supabase } from './supabaseClient';
import store from './components/store/configStore';
import SideBar from './components/SideBar';
import RightMainWindow from './components/RightMainWindow';
import AuthenticationWindow from './components/AuthenticationWindow';

function App() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    // Fetch session on mount
    supabase.auth.getSession().then(({ data: { session }, error }) => {
      if (error) {
        console.log("erorFetching:", error.message)
        return;
      }
      setSession(session);
    });

    // Listen for auth state changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    // Cleanup subscription on unmount
    return () => subscription.unsubscribe();
  }, []);

  // Render Auth component if there is no session
  if (!session ) {
    return <AuthenticationWindow/>
  }


  
  // Render main app components if there is a session
  return (
    <Provider store={store}>
      <main className="flex h-screen">
        <SideBar />
        <RightMainWindow />
      </main>
    </Provider>
  );
}

export default App;
