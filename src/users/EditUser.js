import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function EditUser() {

    let navigate=useNavigate();

    const {id} = useParams();

    const[user, setUser]=useState({
        name:"",
        username:"",
        email:""
    });

    const{name, username, email}=user

    const onInputChange = (event) => {
        setUser({...user,[event.target.name]:event.target.value});
    }

    useEffect(() => {
        loadUser();
    }, []);

    const onSubmit = async (event) => {
        event.preventDefault();
        await axios.put(`http://localhost:8080/user/${id}`,user);
        navigate("/home");
    }

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:8080/user/${id}`)
        setUser(result.data)
    }

  return <div className='container'>
    <div className='row'>
        <div className='col-md-6 offset-md-3 order rounded p-3 mt-2 shadow'>
            <h2 className='text-center m-4'>Edit User</h2>
            <form onSubmit={(event) => onSubmit(event)}>
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
            <button type='submit' className='btn btn-outline-primary mx-3'>Update</button>
            <Link to="/home" className='btn btn-outline-danger mx-3'>Cancel</Link>
            </form>
        </div>
    </div>
  </div>
}
