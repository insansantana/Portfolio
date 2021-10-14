import React from 'react'

export const Button = (props) => {
    return (
        <a href={props.link} rel='noreferrer' target="_blank" className="bg-gray-100 inline text-black mr-5 p-2 rounded-md font-semibold">
            {props.name}
        </a>
    )
}
