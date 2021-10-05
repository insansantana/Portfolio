import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="flex flex-row justify-between items-center px-2 md:my-2 text-primary px-4">
            <div className="logo"><Link to="/"><h1 className="font-righteous font-bold text-md md:text-2xl">HIS</h1></Link></div> <div className="menu w-3/5 py-4">
             <ul className="flex flex-row justify-between text-sm xs:text-xs sm:text-2xl">
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
