import Tabbar from "../../components/tabbar/tabbar";
import React, { useState, useReducer, useEffect } from 'react'
import styles from '../../App.module.scss'
import { Icon, NavBar, Cell, Button, Modal } from 'zarm';
const MyIcon = Icon.createFromIconfont('//at.alicdn.com/t/font_2754245_bavjvslgobw.js');

const Statistics = () => {
    return (
        <div>
            <div className={`${styles.databox}`}>
                <div className="flex-ja font14">2021-08<span className="margin10">|</span><MyIcon type="icon-rili" theme="primary" className="font16 mat10" /></div>
                <div className="font14 color1FF flex-ja mat10">总支出</div>
            </div>
            <Tabbar active="/statistics"></Tabbar>
        </div>
    )
}

export default Statistics
