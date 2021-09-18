import { IconContext } from "react-icons"
import {RiEmotionLaughLine} from 'react-icons/ri'

export const About = () => {
    return (
        <div className="font-primary flex-grow text-primary">
            {/* <h1 className="text-3xl mb-4 font-righteous text-gray-400">BIO</h1> */}
            <p className="text-md">
                My <b className="text-white">name is Hayatul Insan Santana</b>, I have been learning programming languages ​​for 4 years and currently I am working as a freelance fullstack developer. I enjoy building web applications using Javascript and PHP. I also studied Information Management and during college I started learning programming for the first time.
                <br/><br/>
                My <b className="text-white">previous job</b> had nothing to do with programming, before I continue any further I would like to share some of my experiences after graduating from high school
                <br/><br/>
                My <b className="text-white">first job</b> was to deliver food catering to customers in their homes or offices, I did this job while waiting for my graduation from high school until I graduated from college around 2012 - 2015, I still remember very well the feelings I felt from a long time ago. work, I am very happy to get a salary from this job.
                <br/><br/>
                My <b className="text-white">second job</b> was as head of an electronics shop for about 1 year, there wasn't much I could share in my second job because I mostly forgot what I was doing at the time.
                <br/><br/>
                My <b className="text-white">third job</b> is as a 4G agent at one of the well-known providers in Indonesia, namely XL Axiata from 2017-2018 what I did at that time was to make an appointment with customers who used an XL sim card on a 3G network to be replaced with an XL sim card to a 4G network.
                <br/><br/>
                <b className="text-white">My fourth job</b> was as IT support at a beauty clinic in East Jakarta from May 2018 - November 2019 (about 1.5 years I worked), my job was quite a lot because at that time I was the only one. the people in the IT division
                follow my job responsibilities<br/>
                1. system maintenance in each branch<br/>
                2. maintenance of all IT equipment in each branch<br/>
                3. installation of fingerprints on each branch<br/>
                4. monitor system usage errors in each branch<br/>
                5. Train new hires & new owners to use the existing system<br/>
                6. Set up a customer registration system at the exhibition<br/>
                7. And the last one is the ridiculous work I sometimes do, order AC, check for AC leaks, install aclyrics in a newly opened branch, become a photographer, take videos for endorsements and other silly jobs.<IconContext.Provider value={{size:'1.5em',className:'inline'}}><RiEmotionLaughLine/></IconContext.Provider> <br/>
                but I am very happy while working here, I got a lot of experience and a good environment and this is where I learned programming until now
            </p>
        </div>
    )
}
