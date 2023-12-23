import React from 'react'
import Navbar from '../components/SNavbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import GuardRoute from '../components/GuardRoute'
import RouteHome from './RouteHome'
import RouteIdeas from './RouteIdeas'

const RouteApp = () => {
    return (
        <Routes>
            <Route
                path='/*'
                element={
                    <>
                        <Navbar />
                        <GuardRoute />
                    </>
                }
            >
                <Route path='*' element={<RouteHome />} />
                <Route path='ideas/*' element={<RouteIdeas />} />

            </Route>
        </Routes>
    )
}

export default RouteApp