import React, { useState, useReducer, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Icon, NavBar, Cell, Button, Popup, DatePicker } from 'zarm';
const Details = () => {
    let location = useLocation()
    useEffect(() => {
        let id = (location.state as any).id
        console.log(id)
    }, [])
    return (

        <div>
            <NavBar
                left={<Icon type="arrow-left" theme="primary" onClick={() => window.history.back()} />}
                title="账单详情"
            />,
        </div >
    )
}

export default Details
