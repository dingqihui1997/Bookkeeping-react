import React, { useState, } from 'react'
import { Icon, TabBar, Cell, Button, Popup } from 'zarm';
import { useHistory, } from 'react-router-dom'
import Tabbar from "../../components/tabbar/tabbar";
import styles from '../../App.module.scss'

const Home = () => {

    return (
        <div>
            <div className={`${styles.hometop} `}>
                <div className="flex">
                    <div className='flex1 color3f'>总支出:</div>
                    <div className='flex1 color3f'>总收入:</div>
                </div>
                <div className={`${styles.time} flex-end`}>
                    <div className={`${styles.all} mar5`}>全部类型<i className={`iconfont icon-jiantou9 ${styles.icon}`}></i></div>
                    <div className={`${styles.all}`}>2021-8 <i className={`iconfont icon-jiantou9 ${styles.icon}`}></i></div>
                </div>
            </div>
            <Popup
                visible={visible.popCenterSpec}
                direction="center"
                width="70%"
                afterClose={() => console.log('关闭')}
                onEsc={() => {
                    toggle('popCenterSpec');
                }}
                mountContainer={() => {
                    return popupRef.current.portalRef.popup;
                }}
            >
                <Tabbar active='/'></Tabbar>
        </div>
            )

}
            export default Home
