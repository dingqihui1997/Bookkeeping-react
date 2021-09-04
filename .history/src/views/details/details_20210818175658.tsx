import React, { useState, useReducer, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Icon, NavBar, } from 'zarm';
import styles from '../../App.module.scss'
import api from '../../http/api';
const Details = () => {
    let location = useLocation()
    let [id, setId] = useState('')
    let [data, setData] = useState<any>()
    let [icon, setIcon] = useState([
        { name: 'icon-canyin' },
        { name: 'icon-yifu' },
        { name: 'icon-che' },
        { name: 'icon-01f' },
        { name: 'icon-gwc' },
        { name: 'icon-xuexi' },
        { name: 'icon-yiliaohangyedeICON-' },
        { name: 'icon-ico' },
        { name: 'icon-wangzhantubiaoji2_huaban1fuben23' },
        { name: 'icon-tubiaozhizuomoban' },
        { name: 'icon-cardb' },
        { name: 'icon-qianmoney47' },
        { name: 'icon-zhuanzhang' },
        { name: 'icon-licai' },
        { name: 'icon-tuikuan' },
        { name: 'icon-tubiaozhizuomoban' }])
    useEffect(() => {
        let id1 = (location.state as any).id
        billdetail(id1)
    }, [])
    // 获取详情
    let billdetail = (id1: any) => {
        api.billdetail({ id: id1 }).then((res: any) => {
            setData(res.data)
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
            />
            <div className={`${styles.deta}`}>
                <div className="flex1 wi100"></div>
                <div className="flex1 wi100"></div>
                <div className="flex1 wi100"></div>
                <div className="flex1 wi100"></div>
            </div>
        </div >
    )
}

export default Details
