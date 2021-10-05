import { Button } from "../Button"

export const Card = (props) => {
    return (
        <div className="overflow-hidden rounded-xl bg-darker text-white p-5 transition transform duration-200 hover:-translate-y-0.5 z-10">
            <h1 className="card-title text-2xl font-righteous mb-5 text-primary">{props.title}</h1>
            <div className="card-body mb-2">
                <p className="font-primary text-primary sm:text-sm md:text-md lg:text-lg">{props.desc}</p>
            </div>
            <div className="card-footer mt-10">
                <Button name="View" link={props.view} />
                <Button name="Open Project" link={props.project}/>
            </div>
        </div>
    )
}
