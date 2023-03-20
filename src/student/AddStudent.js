import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function AddStudent() {

    let navigate = useNavigate()

    const[student, setStudent] = useState({
        id:'',
        firstname:'',
        lastname:'',
        address:'',
        dob:'',
        degree:'',
        courses:''
    })

    const{id, firstname, lastname, address, dob, degree, courses} = student

    // Function that monitors Input Change of a field.
    const onInputChange = (event) => {
        setStudent({...student,[event.target.name]:event.target.value});
    }

    // Submit function, that sends data to the database.
    const onSubmit = async (event) => {
        event.preventDefault();
        await axios.post("http://localhost:8080/student",student);
        navigate('/studentdetails');
    }

  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 order rounded p-3 mt-2 shadow'>
                <h2 className='text-center m-4'>Register Student</h2>
                {/* Student Registration Form */}
                <form onSubmit={(event) => onSubmit(event)}>
                    {/* <div className='mb-3'>
                        <label htmlFor='id' className='form-label'>Student ID</label>
                        <input type={'text'} className='form-control' placeholder='Enter Student ID' name='id' value={id} onChange={(event)=>onInputChange(event)}/>
                    </div> */}
                    <div className='mb-3'>
                        <label htmlFor='firstname' className='form-label'>First Name</label>
                        <input type={'text'} className='form-control' placeholder='Enter First Name' name='firstname' value={firstname} onChange={(event)=>onInputChange(event)}/>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='lastname' className='form-label'>Last Name</label>
                        <input type={'text'} className='form-control' placeholder='Enter Last Name' name='lastname' value={lastname} onChange={(event)=>onInputChange(event)}/>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='address' className='form-label'>Address</label>
                        <input type={'text'} className='form-control' placeholder='Enter Address' name='address' value={address} onChange={(event)=>onInputChange(event)}/>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='dob' className='form-label'>Date of Birth</label>
                        <input type={'text'} className='form-control' placeholder='Enter Date of Birth' name='dob' value={dob} onChange={(event)=>onInputChange(event)}/>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='degree' className='form-label'>Degree</label>
                        <input type={'text'} className='form-control' placeholder='Enter Degree Program' name='degree' value={degree} onChange={(event)=>onInputChange(event)}/>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='courses' className='form-label'>Courses</label>
                        <input type={'text'} className='form-control' placeholder='Enter Courses (seperate using ",")' name='courses' value={courses} onChange={(event)=>onInputChange(event)}/>
                    </div>
                    <button type='submit' className='btn btn-outline-primary mx-3'>Register</button>
                    <Link to="/menu" className='btn btn-outline-danger mx-3'>Cancel</Link>
                </form>
            </div>
        </div>
    </div>
  )
}
