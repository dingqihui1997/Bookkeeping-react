import React, { useState, useReducer, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
const Details = () => {
    let location = useLocation()
    let id = useState(location.state.id)
    useEffect(() => {
        console.log(9999)
        console.log(location)
    }, [])
    return (

        <div>
            详情
        </div >
    )
}

export default Details
