import React from 'react'
import { useSelector } from 'react-redux'
import {Navigate, Outlet} from 'react-router-dom'

const ProtectedRoutes = () => {

    const nameUser = useSelector(state => state.nameUser)

    if(nameUser.trim() === ''){
        return <Navigate to='/' />
    } else {
        return <Outlet />
    }
}

export default ProtectedRoutes