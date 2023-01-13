import React, {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate, Link} from "react-router-dom";

function Login() {
    const history = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function submit(e) {
        e.preventDefault();

        try {
            await axios.post("http://localhost:3000/", {
                email, password
            }).then (res => {
                if(res.data="exist") {
                    history("/", {state:{id:email}})
                }
                else if(res.data = "notexist") {
                    alert("User has not signed up")
                }
            })
            .catch(e => {
                alert("Wrong details")
                console.log(e);
            })
        } catch {
            console.log(e);
        }
    }

    return (
        <div className="login">
            <h1>Login</h1>

            <form action="POST">
                <input type="text" onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email" name="" id=""/>
                <input type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password" name="" id=""/>
                <input type="submit" onClick={submit}/>
            </form>

            <br/>
            <p> OR</p>
            <br/>

            <Link to="/signup">Signup Page</Link>

        </div>
    )
};

export default Login;