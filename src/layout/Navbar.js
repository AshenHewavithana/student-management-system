import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-dark">
        <div className='container'>
            <a class="navbar-brand text-light" href="/menu">
                <img src="./images/kdu-logo-image.png" width="40" height="30" className="d-inline-block align-top" alt="" />
            </a>

        <div class="collapse navbar-collapse">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link text-light" href="#">Student Mangement System <span class="sr-only"></span></a>
                </li>
            </ul>
            <Link to='/menu' className ="btn btn-outline-light my-2 my-lg-0">Menu</Link>
        </div>
        </div>
  
    </nav>          
  )
}

               
