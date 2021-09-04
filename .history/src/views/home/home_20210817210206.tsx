import React, { useState, useReducer } from 'react'
import { Icon, TabBar, Cell, Button, Popup } from 'zarm';
import { useHistory, } from 'react-router-dom'
import Tabbar from "../../components/tabbar/tabbar";
import styles from '../../App.module.scss'
import Hometop from '../../components/hometop/hometop';
const Home = () => {
    return (
        <div>
            <Hometop></Hometop>
            <div><i className={`iconfont icon-bianji${styles.}`}></i></div>
            <Tabbar active='/'></Tabbar>
        </div>
    )
}
export default Home
