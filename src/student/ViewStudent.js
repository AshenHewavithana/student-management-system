import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function ViewStudent() {

    const {id} = useParams();

    const [student,setStudent]=useState({
        firstname:'',
        lastname:'',
        address:'',
        dob:'',
        degree:'',
        courses:''
    })

    useEffect(()=>{
        loadStudent();
    })

    const loadStudent=async() => {
        const result=await axios.get(`http://localhost:8080/student/${id}`)
        setStudent(result.data)
    }

  return (
    <div className='row'>
        <div className='col-md-6 offset-md-3 order rounded p-3 mt-2 shadow'>
            <h2 className='text-center m-4'>Student Details</h2>

            <div className='card'>
                <div className='card-header'>
                    Details of Student Id : {student.id}
                    <ul className='list-group list-group-flush'>
                        <li className='list-group-item'>
                            <b>First Name : </b>
                            {student.firstname}
                        </li>
                        <li className='list-group-item'>
                            <b>Last Name : </b>
                            {student.lastname}
                        </li>
                        <li className='list-group-item'>
                            <b>Address : </b>
                            {student.address}
                        </li>
                        <li className='list-group-item'>
                            <b>DOB : </b>
                            {student.dob}
                        </li>
                        <li className='list-group-item'>
                            <b>Degree : </b>
                            {student.degree}
                        </li>
                        <li className='list-group-item'>
                            <b>Courses : </b>
                            {student.courses}
                        </li>
                    </ul>
                </div>
            </div>
            <Link className='btn btn-primary my-2' to='/studentdetails'>Back to Home</Link>
        </div>
    </div>
  )
}
