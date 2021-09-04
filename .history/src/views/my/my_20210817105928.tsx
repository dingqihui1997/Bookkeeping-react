import React, { useEffect } from 'react'
import styles from '../../App.module.scss'
import Tabbar from "../../components/tabbar/tabbar";
import api from '../../http/api';
const My = () => {
    useEffect(() => {

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
            <Tabbar></Tabbar>
        </div>
    )
}

export default My
