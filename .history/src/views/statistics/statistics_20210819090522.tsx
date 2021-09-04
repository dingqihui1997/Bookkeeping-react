import Tabbar from "../../components/tabbar/tabbar";
import React, { useState, useReducer, useEffect } from 'react'
import styles from '../../App.module.scss'
import { Icon, NavBar, Cell, Button, Modal } from 'zarm';
const MyIcon = Icon.createFromIconfont('//at.alicdn.com/t/font_2754245_bavjvslgobw.js');

const Statistics = () => {
    return (
        <div>
            <div className={`${styles.databox}`}>
                <div className="flex-ja font14">2021-08 |<MyIcon type="icon-rili" theme="primary" /></div>
            </div>
            <Tabbar active="/statistics"></Tabbar>
        </div>
    )
}

export default Statistics
