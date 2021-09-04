import React, { useState, useReducer, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Icon, NavBar, } from 'zarm';
import api from '../../http/api';
const Details = () => {
    let location = useLocation()
    let [id, setId] = useState('')
    let [data, setData] = useState<any>()
    useEffect(() => {
        setId((location.state as any).id)
        billdetail()
    }, [])
    // 获取详情
    let billdetail = () => {
        api.billdetail({ id: id }).then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
    }
    return (

        <div style={{ height: "100vh", background: "#F5F5F5" }}>
            <NavBar
                left={<Icon type="arrow-left" theme="primary" onClick={() => window.history.back()} />}
                title="账单详情"
            />,
        </div >
    )
}

export default Details
