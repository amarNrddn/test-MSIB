import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Ideas from '../pages/Ideas'

const RouteIdeas = () => {
  return (
    <Routes>
        <Route path='/' element={<Ideas/>} />
    </Routes>
  )
}

export default RouteIdeas