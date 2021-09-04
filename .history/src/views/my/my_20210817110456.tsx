import React, { useEffect, useState } from 'react'
import styles from '../../App.module.scss'
import Tabbar from "../../components/tabbar/tabbar";
import api from '../../http/api';
const My = () => {
    let activeKey = useState('/my')
    useEffect(() => {
        get_userinfo()
    }, [])
    let get_userinfo = () => {
        api.get_userinfo().then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err
            )
        })
    }
    return (
        <div>
            <div className={`${styles.myimg}`}>888</div>
            <Tabbar active='/'></Tabbar>
        </div>
    )
}

export default My
