import Main from './components/Main';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import {useState} from 'react';
import './App.css';

function App() {
  const [userID,setUserID] = useState(0);

  const [isSignedIn,setSignedIn] = useState(false);
  const [signInOrSignUp,setSignInOrSignUp] = useState(0);

  const toggleSISU = () => {
    if (signInOrSignUp === 0 ) {
      setSignInOrSignUp(1);
      return;
    }
    setSignInOrSignUp(0);
    return;
  }
  return (
    <div className="App">
      {isSignedIn &&  
        <Main 
          userID={userID} 
          setUserID={setUserID}
          setSignInOrSignUp={setSignInOrSignUp}
          setSignedIn={setSignedIn}
        />}

      {signInOrSignUp === 0 && 
        <SignIn 
          onClick={toggleSISU} 
          setMain={setSignInOrSignUp} 
          onLogin={setSignedIn}
          setUserID={setUserID}
        />}

      {signInOrSignUp === 1 && 
        <SignUp 
          onClick={toggleSISU} 
          setMain={setSignInOrSignUp} 
          onLogin={setSignedIn}
          setUserID={setUserID}
        />}
    </div>
  );
}
export default App;