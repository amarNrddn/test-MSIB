import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Work from '../pages/Work'

const RouteHome = () => {
  return (
    <Routes>
        <Route path='/' element={<Work/>} />
    </Routes>
  )
}

export default RouteHome