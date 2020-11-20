import React from 'react'
import { Link } from "react-router-dom"


function Navigation() {
    return (
        <nav>
           <Link className='title' to='/profile'>Profile</Link>
           <Link className='title' to='/abc'>Abc</Link>
        </nav>
    )
}

export default Navigation;