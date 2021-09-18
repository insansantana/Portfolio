
import { IconContext } from 'react-icons'
import { SiInstagram ,SiWhatsapp ,SiFacebook,SiGithub} from 'react-icons/si'
import '../../App.css'

const Footer = () => {
    return (
        <footer className="flex my-4">
            <a href=""><IconContext.Provider value={{color:"64e064", size:"2em"}}><SiWhatsapp /></IconContext.Provider></a>
            <a href="" className="mx-10"><IconContext.Provider value={{color:"#BB5287", size:"2em"}}><SiInstagram /></IconContext.Provider></a>
            <a href=""><IconContext.Provider value={{color:"5592fc", size:"2em"}}><SiFacebook /></IconContext.Provider></a>
            <a href="" className="mx-10"><IconContext.Provider value={{size:"2em",color:'ffffff'}}><SiGithub /></IconContext.Provider></a>
        </footer>
    )
}

export default Footer
