
import { IconContext } from 'react-icons'
import { SiInstagram ,SiWhatsapp ,SiFacebook,SiGithub} from 'react-icons/si'
import '../../App.css'

const Footer = () => {
    return (
        <footer className="flex justify-start my-4 xs:mt-20">
            <a href="https://wa.me/6281219820789" rel='noreferrer' target="_blank" className="ml-2"><IconContext.Provider value={{color:"64e064", size:"1.5em"}}><SiWhatsapp /></IconContext.Provider></a>
            <a href="https://www.instagram.com/hayatulinsan/" rel='noreferrer' target="_blank" className="mx-4 md:mx-10"><IconContext.Provider value={{color:"#BB5287", size:"1.5em"}}><SiInstagram /></IconContext.Provider></a>
            <a href="https://www.facebook.com/insansantana/" rel='noreferrer' target="_blank"><IconContext.Provider value={{color:"5592fc", size:"1.5em"}}><SiFacebook /></IconContext.Provider></a>
            <a href="https://github.com/insansantana" rel='noreferrer' target="_blank" className="mx-4 md:mx-10"><IconContext.Provider value={{size:"1.5em",color:'ffffff'}}><SiGithub /></IconContext.Provider></a>
        </footer>
    )
}

export default Footer
