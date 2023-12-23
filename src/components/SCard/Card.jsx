import React, { useContext } from 'react'
import { card } from '../../assets'
import { Contex } from '../../contexs/fetch'

const Card = () => {
    const { ideas } = useContext(Contex)

    const formatDate = (inputDateString) => {
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        return new Date(inputDateString).toLocaleDateString('id-ID', options);
    };
    return (
        <div className='w-[100%] items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
            {ideas.map((item, i) => {
                return (
                    <div key={i} className="max-w-[250px] mx-auto bg-white  overflow-hidden drop-shadow-md rounded-lg pb-2">
                        <img className="w-full h-48 object-cover" src={card} alt="Kitten" />
                        <div className="px-2 mt-3">
                            <p className='text-gray-400'>{formatDate(item.published_at)}</p>
                            <p className="text-gray-700 line-clamp-3 font-semibold ">{item.title}</p>
                        </div>
                    </div>
                )
            })}

        </div>
    )
}

export default Card