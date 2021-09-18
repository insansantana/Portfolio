import { Link } from 'react-router-dom'
import  Typewriter  from 'typewriter-effect'
import { FaSmileBeam } from 'react-icons/fa'
import { motion } from 'framer-motion'
const Home = () => {
    return (
        <div className="home min-w-full flex flex-grow flex-col justify-center items-center md:flex-row md:justify-between">
            <div className="title md:w-1/2 md:mt-0 md:text-left text-center w-full font-sans text-4xl font-bold font-primary">
                <h1 className="text-white">
                    <Typewriter 
                        onInit={(typewriter) => {
                            typewriter.typeString(`Hi,<br>I am Hayatul Insan Santana<br>Software Developer.`).start()
                        }}
                    />
                </h1>
                <br/>
                
                <button><Link className="rounded-full py-3 px-6 bg-blue-400 text-white" to="/about">More Info</Link></button>
            </div>
            <motion.div initial={{x:300,opacity:0}} animate={{x:0,opacity:1,scale:[.2,.4,.8],borderRadius: ["0", "15%", "25%"]}} transition={{duration:1,type:"spring"}} className="person md:w-1/2 md:mt-0 md:text-left text-center w-full overflow-hidden">
                <img src={`${process.env.PUBLIC_URL}/me.jpg`} className="md:w-full" alt=""/>
            </motion.div>
        </div>
    )
}

export default Home
