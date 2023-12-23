import React, { useContext } from 'react'
import { Contex } from '../contexs/fetch'
import Bener from '../components/SBener/Bener'
import Card from '../components/SCard/Card'
import Pagination from '../components/SPagination/Pagination'

const Ideas = () => {
    const { setLimit, allIdeas, limit, setPage } = useContext(Contex)
    const pageCount = Math.ceil(allIdeas.length / limit)
    console.log(allIdeas)

    const handleClickPage = (event) => {
        setPage(event.selected + 1)
        console.log(setPage)
    };

    const handleSelectChange = (event) => {
        setLimit(parseInt(event.target.value));
    };





    return (
        <div className='pt-10 flex flex-col items-center' >
            <Bener />
            <div className="px-10">
                <div className="flex w-full justify-between items-center mb-[30px] font-bold">
                    <div className="">
                        <p>showing 1 - {limit} of {allIdeas.length}</p>
                    </div>

                    <div className="flex items-center gap-2">
                        <p>Show per page:</p>
                        <select
                            value={setLimit}
                            onChange={handleSelectChange}
                            className='rounded-full w-[100px] h-[40px] flex items-center text-[17px]'
                        >
                            <option value={10}>10</option>
                            <option value={20}>20</option>
                            <option value={50}>50</option>
                        </select>
                    </div>
                </div>
                <Card />
            </div>
            <div className="mt-10 pb-10">
                <Pagination handleClickPage={handleClickPage} pageCount={pageCount} />
            </div>
        </div>
    )
}

export default Ideas