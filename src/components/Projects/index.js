import { Card } from '../Card'
import { UndrawAnalysis } from 'react-undraw-illustrations'

const Projects = () => {
    return (
        <div className="relative overflow-hidden grid grid-cols-3 gap-5 flex-grow mt-10">
            <Card title="Sammitr" view='#' project="https://sammitr.co.id/" desc='A fully responsive dynamic web company profile with dashboard made with Codeigniter,Bootstrap,AdminLTE and a little bit of JavaScript '/>
            <Card title="Software Beauty Clinic" view='#' desc='A software to help record patient arrival schedules, medical records, payments, warehouse stock, multi-branch, drug sales & purchases, etc.'/>
             <Card title="Tamaro Information System" view='#' project="http://staging-tis.tamaro.co.id/" desc='A software to manage many divisions such as Payroll,Attendance,PPH21,BPJS, etc.'/>
            <div className="absolute bottom-0 right-0 w-1/2">
                <UndrawAnalysis
                    primaryColor='#6c68fb' height='100%'
                />
            </div>
        </div>
    )
}


export default Projects