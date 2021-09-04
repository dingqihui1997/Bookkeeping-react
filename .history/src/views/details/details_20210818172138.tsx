import React, { useState, useReducer, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
const Details = () => {
    let location = useLocation()
    useEffect(() => {
        console.log(9999)
        console.log(location)
        let id = (location.state as any).id
    }, [])
    return (

        <div>
            详情
        </div >
    )
}

export default Details
