import React, { useState, } from 'react'
// import { Icon, TabBar, Cell, Button } from 'zarm';
import { useHistory } from 'react-router-dom'
import Tabbar from "../../components/tabbar/tabbar";
import styles from '../../App.module.scss'

const Home = () => {

    return (
        <div>
            <div className={`${styles.hometop} flex-a`}>
                <div className="">
                    <div className='flex1 color3f flex-a'>总支出:</div>
                    <div className='flex1 color3f flex-a'>总收入:</div>
                </div>
                <div className="flex-end">
                    <div>全部类型</div>
                    <div>2021-8</div>
                </div>
            </div>
            <Tabbar active='/'></Tabbar>
        </div>
    )

}
export default Home
