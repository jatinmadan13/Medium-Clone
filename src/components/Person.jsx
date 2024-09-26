import React from 'react'

const Person = ({ picture, name, className }) => {
    return (
        <div className={`${className} border-t-[1.5px] border-black flex items-center space-x-4 h-20`}>
            <img alt="team" src={picture} className=" w-14 aspect-square rounded-full object-cover"/>
            <h2 className="text-gray-900 font-secondary font-medium text-xl">{name}</h2>
        </div>
    )
}

export default Person;