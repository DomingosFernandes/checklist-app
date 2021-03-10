import {useState} from 'react';
import {Button,TextInput} from 'carbon-components-react';
import {Login16} from '@carbon/icons-react';
const SignIn = ({onClick,setMain,onLogin,setUserID,setIsLoading}) => {

    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    
    const UserSignIn = async() => {
        setIsLoading(true);
        let response = await fetch('http://localhost:9000/sign-in',{
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
            <h2>Please sign in to continue to the Checklist app</h2>
            <form className="sign" onSubmit={(e)=>{
                e.preventDefault();
                UserSignIn()
                    .then(value => {
                        if(value.status){ setUserID(value.id); setMain(2); onLogin(true);}
                        else { alert("Invalid username or password , please try again"); }
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

                {
                    <Button 
                        type="submit"
                        style={buttonStyling}
                        renderIcon={Login16}
                        iconDescription="Sign In"
                    >Sign In</Button>
                    //<button type="submit" className="sign-btn">Sign In</button>
                }
            </form>
            <button className="switch" onClick={onClick}>New User ? Sign up here </button>
        </div>
    )
}

export default SignIn
