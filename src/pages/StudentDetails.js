import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Form, Link, useParams } from 'react-router-dom';

export default function StudentDetails() {

    const [students, setStudents] = useState([]);

    useEffect(() => {
        loadStudents();
    },[]);

    // function to load students from the database
    const loadStudents = async() => {
        const result=await axios.get("http://localhost:8080/students")
        setStudents(result.data);
    }

    // function to delete a student from the system
    const deleteStudent=async(id)=>{
        await axios.delete(`http://localhost:8080/student/${id}`)
        loadStudents();
    }

    const [search, setSearch] = useState('');

  return (
    <div>
        <h1>Student Details</h1>
        <div className='container'>
            <div className='mb-3'>
                <input type={"text"} className="form-control" placeholder='Enter Student Id to search...' name='name' onChange={(event)=>setSearch(event.target.value)}/>
            </div>
        </div>
        <div className='container'>
        <div className='py-4'>
        {/* Table that displays the results */}
        <table className="table border shadow">
            <thead>
                <tr>
                    <th scope="col">Student ID</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Address</th>
                    <th scope="col">DOB</th>
                    <th scope="col">Degree</th>
                    <th scope="col">Courses</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    // Search Filter for students.
                    students.filter((student) => {
                        return search.toLowerCase() === '' ? student : student.firstname.toLowerCase().includes(search)
                    })
                    .map((student) => (
                    // Calls student details for the table
                    <tr key={student.id}>
                    <td>{student.id}</td>
                    <td>{student.firstname}</td>
                    <td>{student.lastname}</td>
                    <td>{student.address}</td>
                    <td>{student.dob}</td>
                    <td>{student.degree}</td>
                    <td>{student.courses}</td>
                    <td>
                    <Link to={`/viewstudent/${student.id}`} className='btn btn-outline-primary mx-2'>Course History</Link>
                    <Link to={`/editstudent/${student.id}`} className='btn btn-outline-success mx-2'>Edit</Link>
                    <button className='btn btn-danger mx-2' onClick={() => deleteStudent(student.id)}>Delete</button>
                    </td>
                    </tr>
                    ))
                }

            </tbody>
        </table>
        </div>
    </div>
    </div>
  )
}
