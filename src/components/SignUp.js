import {useState} from 'react';
const SignUp = ({onClick,setMain,onLogin,setUserID}) => {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [passconf,setPassconf] = useState('');

    const UserSignUp = async()=>{
        let response = await fetch('http://localhost:9000/sign-up',{
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
            <h2>Sign up to the Checklist app !</h2>
            <form className="sign" onSubmit={(e)=>{
                e.preventDefault();
                if (password !== passconf){
                    alert('password and confirm password do not match ');
                    return;
                }

                UserSignUp().then(value=>{
                    if(value.status){
                        setUserID(value.id);
                        setMain(2);
                        onLogin(true);
                    }
                    else {
                        alert("Username already exists ! Please use another");
                    }
                })
            }}>
                <label htmlFor="username">Username:</label>
                <input 
                    className="control" 
                    type="text" 
                    id="username" 
                    placeholder="Your username"
                    value = {username}
                    onChange = {(e) => setUsername(e.target.value)}
                />
                
                <label htmlFor="password">Password:</label>
                <input 
                    className="control" 
                    type="password" 
                    id="password" 
                    placeholder="Your password"
                    value = {password}
                    onChange = {(e) => setPassword(e.target.value)}
                />
                
                <label htmlFor="confpass">Confirm password:</label>
                <input 
                    className="control" 
                    type="password" 
                    id="confpass" 
                    placeholder="Confirm password"
                    value = {passconf}
                    onChange = {(e) => setPassconf(e.target.value)}
                />

                <button type="submit" className="sign-btn">Sign Up</button>
            </form>
            <button className="switch" onClick={onClick}>Existing user ? Sign in here</button>
        </div>
    )
}

export default SignUp
