import { Card } from '../Card'
import { UndrawAnalysis } from 'react-undraw-illustrations'

const projects = [
    {
        id:1,
        title:`Sammitr`,
        view:`https://github.com/insansantana`,
        project:`https://sammitr.co.id/`,
        desc:`A fully responsive dynamic web company profile with dashboard made with Codeigniter,Bootstrap,AdminLTE and a little bit of JavaScript`,
    },
    {
        id:2,
        title:`Software Beauty Clinic`,
        view:`https://github.com/insansantana`,      
        project:`#`,
        desc:`A software to help record patient arrival schedules, medical records, payments, warehouse stock, multi-branch, drug sales & purchases, etc.`,
    },
    {
        id:3,
        title:`Tamaro Information System`,
        view:`https://github.com/insansantana`,     
        project:`http://staging-tis.tamaro.co.id/`,
        desc:`A software to manage many divisions such as Payroll,Attendance,PPH21,BPJS, etc.`,
    },
    {
        id:4,
        title:`Quraan Apps`,
        view:`https://github.com/insansantana`,
        project:`https://quraan-app.vercel.app/`,
        desc:`Quraan apps build with Love`,
    },
]



const Projects = () => {
    return (
        <div className="relative grid grid-cols-1 auto-cols-fr sm:grid-cols-2 lg:grid-cols-3 gap-5 flex-grow auto-rows-max mt-10">
            {projects.map(p => {
                return <Card key={p.id} title={p.title} view={p.view} project={p.project} desc={p.desc} /> 
            })}
            <div className="absolute bottom-0 right-0 w-1/2">
                <UndrawAnalysis
                    primaryColor='#6c68fb' height='100%'
                />
            </div>
        </div>
    )
}


export default Projects