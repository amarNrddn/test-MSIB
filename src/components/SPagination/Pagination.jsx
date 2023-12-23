import React from 'react'
import ReactPaginate from 'react-paginate'

const Pagination = ({ handleClickPage, pageCount }) => {
    return (
        <ReactPaginate
            nextLabel="next >"
            marginPagesDisplayed={1}
            onPageChange={handleClickPage}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
            containerClassName='pagination flex gap-5'
            pageLinkClassName='page-num px-3 py-2 rounded-md transition duration-300 focus:outline-none focus:shadow-outline bg-gray-200 hover:bg-[#EF6D34] text-gray-700'
            previousLinkClassName='page-num px-3 py-2 rounded-md transition duration-300 focus:outline-none focus:shadow-outline bg-gray-200 hover:bg-gray-300 text-gray-700'
            nextLinkClassName='page-num px-3 py-2 rounded-md transition duration-300 focus:outline-none focus:shadow-outline bg-gray-200 hover:bg-gray-300 text-gray-700'
            activeLinkClassName='active bg-orange-400 px-3 py-2 rounded-md transition duration-300 focus:outline-none focus:shadow-outline text-white'
        />
    )
}

export default Pagination