import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import axios from 'axios'

const Contex = createContext(null)

const Provider = ({ children }) => {
    const [allIdeas, setAllIdeas] = useState([])
    const [ideas, setIdeas] = useState([])
    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(10);

    const getIdeas = async () => {
        try {
            const res = await axios.get(`https://suitmedia-backend.suitdev.com/api/ideas?page[number]=${page}&page[size]=${limit}&append[]=small_image&append[]=medium_image&sort=-published_at`)

            setIdeas(res.data.data)
        } catch (error) {

        }
    }

    const getAllIdeas = async () => {
        try {
            const allRes = await axios.get(`https://suitmedia-backend.suitdev.com/api/ideas`)

            setAllIdeas(allRes.data.data)
        } catch (error) {

        }
    }

    useEffect(() => {
        getAllIdeas()
    }, [])

    useEffect(() => {
        getIdeas()
    }, [page, limit])

    return (
        <Contex.Provider value={{ ideas, page, limit, setPage, setLimit, allIdeas }}>
            {children}
        </Contex.Provider>
    )
}

export { Contex, Provider }