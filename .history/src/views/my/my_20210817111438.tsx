import React, { useEffect, useState } from 'react'
import styles from '../../App.module.scss'
import Tabbar from "../../components/tabbar/tabbar";
import api from '../../http/api';
const My = () => {
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
            <div className={`${styles.myimg} flex-sb`}>
                <div>
                    <div className={`${styles.myname}`}>昵称：1</div>
                    <div><img src="http://s.yezgea02.com/1615973630132/geqian.png"></img></div>
                </div>
                <div></div>
            </div>
            <Tabbar active='/my'></Tabbar>
        </div>
    )
}

export default My
