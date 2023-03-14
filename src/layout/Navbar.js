import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
        <nav className="navbar navvar-nav navbar-expand-lg navbar-light bg-warning">
            <div className="container">
            <a class="navbar-brand" href="/menu">
                <img src="./images/kdu-logo-image.png" width="30" height="30" class="d-inline-block align-top" alt=""/>
                Student Management System
            </a>
                <Link className='btn btn-primary' to="/menu">Main Menu</Link>
            </div>
        </nav>
    </div>
  )
}
