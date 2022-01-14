import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import './demoNavLink.css'
import { signup} from "../../store/session";


function DemoUser(){
    const dispatch = useDispatch();
    const [credential, setCredential] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUserName]= useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState('');

    const handleSubmit = async (e)=> {

        const randomName = Math.random().toString(36).substring(2,8);
        const randomEmail = Math.random().toString(36).substring(2,8) + "@" + Math.random().toString(36).substring(2,8)+ ".com";
        console.log(randomEmail)
        e.preventDefault();
        setCredential(randomName);
        setPassword('123456')
        setUserName(randomName);
        setFirstName("Hello");
        setLastName("World");
        setEmail(randomEmail)

        const user = {
            username,
            email,
            password,
            firstName,
            lastName,
        }

        const loginUser = {
            credential,
            password,
            firstName,
            lastName,
        }

        // await dispatch(sessionActions.signup(user))
        //     .catch(async (res)=> {
        //         const data = await res.json();
        //         return;
        //     })
        console.log(credential, password)
        console.log(user)
        return dispatch(sessionActions.signup(user)).catch(
            async (res) => {
              const data = await res.json();
            }
          );

    }

    return (
        <button onClick={handleSubmit} className="demo-user" type="submit">Demo User</button>
        // <NavLink className="demo-user" to="/">Demo User</NavLink>

    )







}

export default DemoUser;
