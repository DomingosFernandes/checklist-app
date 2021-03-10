import {useState} from 'react';
const SignIn = ({onClick,setMain,onLogin,setUserID}) => {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const UserSignIn = async() => {
        let response = await fetch('http://localhost:9000/sign-in',{
            method:'POST',
            cors:'same-origin',
            headers : {
                'Content-Type': 'application/json'
            },
            body : JSON.stringify({username,password})
        });
        let valid = await response.json();
        if (valid.data.length===0) return {status:false};
        return {status:true,id:valid.data[0]['USER_ID']};
    }
    
    return (
        <div className="main">
            <h2>Please sign in to continue to the Checklist app</h2>
            <form className="sign" onSubmit={(e)=>{
                e.preventDefault();
                UserSignIn().then(value => {
                    if(value.status){
                        setUserID(value.id);
                        setMain(2);
                        onLogin(true);
                    }
                    else {
                        alert("Invalid username or password , please try again");
                    }
                })
            }}>
                <label htmlFor="username">Username:</label>
                <input className="control" 
                    type="text" 
                    id="username" 
                    placeholder="Your username"
                    value = {username}
                    onChange = {(e) => setUsername(e.target.value)}                
                />
                
                <label htmlFor="password">Password:</label>
                <input className="control" 
                    type="password" 
                    id="password" 
                    placeholder="Your password"
                    value = {password}
                    onChange = {(e) => setPassword(e.target.value)} 
                />

                <button type="submit" className="sign-btn">Sign In</button>
            </form>
            <button className="switch" onClick={onClick}>New User ? Sign up here </button>
        </div>
    )
}

export default SignIn
