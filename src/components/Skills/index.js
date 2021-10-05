import React from 'react'
import { IconContext } from 'react-icons'
import { SiBootstrap, SiCodeigniter, SiCss3, SiHtml5, SiJavascript, SiMongodb, SiMysql, SiPhp, SiTailwindcss } from 'react-icons/si'
import { FaPhp } from 'react-icons/fa'
import { RiReactjsFill } from 'react-icons/ri'
const Skills = () => {
    return (
        <div className="flex-grow mt-8 md:mt-16">
            <h1 className="text-xl font-bold text-4xl md:text-6xl mb-14 md:mb-24 text-primary">My Backpack</h1>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-y-10 flex-grow">
                <IconContext.Provider value={{className:"text-7xl md:text-9xl cursor-pointer hover:text-red-500 text-skills"}}><SiHtml5/></IconContext.Provider> 
                <IconContext.Provider value={{className:"text-7xl md:text-9xl cursor-pointer hover:text-blue-500 text-skills"}}><SiCss3/></IconContext.Provider> 
                <IconContext.Provider value={{className:"text-7xl md:text-9xl cursor-pointer hover:text-yellow-500 text-skills"}}><SiJavascript/></IconContext.Provider> 
                <IconContext.Provider value={{className:"text-7xl md:text-9xl cursor-pointer hover:text-purple-400 text-skills"}}><FaPhp/></IconContext.Provider> 
                <IconContext.Provider value={{className:"text-7xl md:text-9xl cursor-pointer hover:text-red-500 text-skills"}}><SiCodeigniter/></IconContext.Provider> 
                <IconContext.Provider value={{className:"text-7xl md:text-9xl cursor-pointer hover:text-blue-300 text-skills"}}><SiMysql/></IconContext.Provider> 
                <IconContext.Provider value={{className:"text-7xl md:text-9xl cursor-pointer hover:text-green-500 text-skills"}}><SiMongodb/></IconContext.Provider> 
                <IconContext.Provider value={{className:"text-7xl md:text-9xl cursor-pointer hover:text-purple-500 text-skills"}}><SiBootstrap/></IconContext.Provider> 
                <IconContext.Provider value={{className:"text-7xl md:text-9xl cursor-pointer hover:text-green-300  text-skills"}}><SiTailwindcss/></IconContext.Provider> 
                <IconContext.Provider value={{className:"text-7xl md:text-9xl cursor-pointer hover:text-react text-skills"}}><RiReactjsFill/></IconContext.Provider> 
                {/* <IconContext.Provider value={{size:"5em",style:{color:'7952B3'}}}><SiBootstrap/></IconContext.Provider>  */}
            </div>
        </div>
    )
}

export default Skills
