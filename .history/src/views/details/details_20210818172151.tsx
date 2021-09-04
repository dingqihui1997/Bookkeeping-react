import React, { useState, useReducer, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
const Details = () => {
    let location = useLocation()
    useEffect(() => {
        let id = (location.state as any).id
        console.log(id)
    }, [])
    return (

        <div>
            详情
        </div >
    )
}

export default Details
