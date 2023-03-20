import React from 'react'
import { Link } from 'react-router-dom'

export default function MainMenu() {
  return (
    <div className='py-4'>
        <h1>Main Menu</h1>
        <div className='container py-5 bg-gradient-primary'>
        <div className='row row-cols-1 row-cols-md-3 g-4'>
            <div className='col'>
                <div className="card md-3 h-100 ">
                <span className='border border-4 border-primary'>
                <img className="card-img-top rounded mx-auto d-block" src='./images/student-image.jpg' alt="Card image cap"/>
                <div className="card-body">
                    <Link to="/addstudent" className="btn btn-primary">Add Student</Link>
                </div>
                </span>
                </div>
            </div>
            <div className='col'>
                <div className="card md-3 h-100">
                <span className='border border-4 border-primary'>
                <img className="card-img-top" src='./images/students-image.jpg' alt="Card image cap"/>
                <div className="card-body">
                    <Link to="/studentdetails" className="btn btn-primary">View Students</Link>
                </div>
                </span>
                </div>
            </div>
            <div className='col'>
                <div className="card md-3 h-100">
                <span className='border border-4 border-primary'>
                <img className="card-img-top" src='./images/system-image.jpg' alt="Card image cap"/>
                <div className="card-body">
                    <Link to='/log' className="btn btn-primary">System Log</Link>
                </div>
                </span>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}
