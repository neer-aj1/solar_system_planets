import React from 'react'
import { Link } from 'react-router-dom'

function Cards({ dt }) {
    return (
        <div className="flex flex-col max-[720px]:items-center max-w-sm m-3 rounded overflow-hidden shadow-lg">
            <img className='w-72 lg:w-full' src={dt.imgSrc.img} alt={dt.imgSrc.imgDescription} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-gray-100">{dt.name}</div>
                <p className='text-gray-100'><b>Planet Order:</b> {dt.planetOrder}</p>
                <p className="text-gray-100 text-base">
                    {dt.description}
                </p>
            </div>
            <div className='flex justify-end pr-5'>
                <Link className=' text-blue-200' to={`/planet/${dt.id}`}> Read More</Link>
            </div>
        </div>
    )
}

export default Cards