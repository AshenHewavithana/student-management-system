import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function AddUser() {

    let navigate=useNavigate();

    const[user, setUser]=useState({
        id:"",
        name:"",
        username:"",
        email:""
    })

    const{id, name, username, email}=user

    const onInputChange = (event) => {
        setUser({...user,[event.target.name]:event.target.value});
    }

    const onSubmit = async (event) => {
        event.preventDefault();
        await axios.post("http://localhost:8080/user",user);
        navigate("/home");
    }

  return <div className='container'>
    <div className='row'>
        <div className='col-md-6 offset-md-3 order rounded p-3 mt-2 shadow'>
            <h2 className='text-center m-4'>Register User</h2>
            <form onSubmit={(event) => onSubmit(event)}>
            <div className='mb-3'>
                <label htmlFor='Name' className='form-label'>
                    Student ID
                </label>
                <input type={"text"} className="form-control" placeholder='Enter Student ID' name='id' value={id} onChange={(event)=>onInputChange(event)}/>
            </div>
            <div className='mb-3'>
                <label htmlFor='Name' className='form-label'>
                    Name
                </label>
                <input type={"text"} className="form-control" placeholder='Enter Name' name='name' value={name} onChange={(event)=>onInputChange(event)}/>
            </div>
            <div className='mb-3'>
                <label htmlFor='Name' className='form-label'>
                    Username
                </label>
                <input type={"text"} className="form-control" placeholder='Enter Username' name='username' value={username} onChange={(event)=>onInputChange(event)}/>
            </div>
            <div className='mb-3'>
                <label htmlFor='Name' className='form-label'>
                    Email Address
                </label>
                <input type={"text"} className="form-control" placeholder='Enter Email Address' name='email' value={email} onChange={(event)=>onInputChange(event)}/>
            </div>
            <button type='submit' className='btn btn-outline-primary mx-3'>Register</button>
            <Link to="/home" className='btn btn-outline-danger mx-3'>Cancel</Link>
            </form>
        </div>
    </div>
  </div>
}
