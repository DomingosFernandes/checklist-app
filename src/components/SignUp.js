import { Upgrade16 } from '@carbon/icons-react';
import {Button,TextInput} from 'carbon-components-react';
import {useState} from 'react';
const SignUp = ({onClick,setMain,onLogin,setUserID,setIsLoading}) => {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [passconf,setPassconf] = useState('');

    //const [pwordMatches,setPwordMatches] = useState(true);
    const UserSignUp = async()=>{
        setIsLoading(true);
        let response = await fetch('http://localhost:9000/sign-up',{
            method:'POST',
            cors:'same-origin',
            headers : {
                'Content-Type': 'application/json'
            },
            body : JSON.stringify({username,password})
        });
        let valid = await response.json();
        setIsLoading(false);
        if (valid.data.length===0) return {status:false};
        return {status:true,id:valid.data[0]['USER_ID']};
    }
    const buttonStyling = {
        "backgroundColor": "rgb(60, 73, 194)",
        "gridColumn": "1 / span 2"
    }
    const labelStyling = {
        "fontSize":"2.8vmin"
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
                <label htmlFor="username" style={labelStyling}>Username:</label>
                <TextInput 
                    type="text" 
                    id="username" 
                    placeholder="Your username"
                    value = {username}
                    onChange = {(e) => setUsername(e.target.value)}
                    labelText=""  
                />
                
                <label htmlFor="password" style={labelStyling}>Password:</label>
                <TextInput 
                    type="password" 
                    id="password" 
                    placeholder="Your password"
                    value = {password}
                    onChange = {(e) => setPassword(e.target.value)}
                    labelText=""  
                />
                
                <label htmlFor="confpass" style={labelStyling}>Confirm password:</label>
                <TextInput 
                    type="password" 
                    id="confpass" 
                    placeholder="Confirm password"
                    value = {passconf}
                    onChange = {(e) => setPassconf(e.target.value)}
                    labelText=""  
                />

                {<Button type="submit"style={buttonStyling} renderIcon={Upgrade16} iconDescription="Sign Up">Sign Up</Button>
                //<button type="submit" className="sign-btn">Sign Up</button>
                }
            </form>
            <button className="switch" onClick={onClick}>Existing user ? Sign in here</button>
        </div>
    )
}

export default SignUp
