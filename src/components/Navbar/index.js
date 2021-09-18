import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="flex flex-row justify-between items-center my-2 text-primary">
            <div className="logo"><Link to="/"><h1 className="font-righteous font-bold text-2xl">HIS</h1></Link></div> <div className="menu w-1/2 py-4">
             <ul className="flex flex-row justify-between text-xl">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/skills">Skills</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    {/* <li><Link to="/contact">Contact</Link></li> */}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
