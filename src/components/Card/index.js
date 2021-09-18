import { Button } from "../Button"

export const Card = (props) => {
    return (
        <div className="relative w-full h-72 rounded-xl bg-darker text-white p-5 transition transform duration-200 hover:-translate-y-0.5 z-10">
            <h1 className="card-title text-2xl font-righteous mb-5 text-primary">{props.title}</h1>
            <div className="card-body mb-2">
                <p className="font-primary text-primary">{props.desc}</p>
            </div>
            <div className="card-footer absolute bottom-0 mb-5">
                <Button name="View" link={props.view} />
                <Button name="Open Project" link={props.project}/>
            </div>
        </div>
    )
}
