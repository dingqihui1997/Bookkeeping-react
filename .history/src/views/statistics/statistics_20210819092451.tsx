import Tabbar from "../../components/tabbar/tabbar";
import React, { useState, useReducer, useEffect } from 'react'
import styles from '../../App.module.scss'
import { Icon, NavBar, Cell, Button, DatePicker } from 'zarm';
const MyIcon = Icon.createFromIconfont('//at.alicdn.com/t/font_2754245_bavjvslgobw.js');
import api from "../../http/api";
import dayjs from "dayjs";
const Statistics = () => {
    // let getdata = () => {
    //     api.getdata()
    // }
    let [time, setTime] = useState(dayjs(new Date()).format(`YYYY-MM`)) //当前时间
    let [show, setShow] = useState(false)
    return (
        <div>
            <div className={`${styles.databox}`}>
                <div className="flex-ja font14 mat10" onClick={() => { setShow(true) }}>{time}<span className="margin10 ">|</span><MyIcon type="icon-rili" theme="primary" className="font16" /></div>
                <div className="font14 color1FF flex-ja mat10">总支出</div>
            </div>
            <DatePicker
                visible={show}
                title="选择日期"
                okText="确定"
                cancelText="取消"
                defaultValue={time}
                mode="month"
                min="2007-01"
                max={time}
                value={time}
                onOk={(e: any) => {
                    console.log(dayjs(e).format(`YYYY - MM`))
                    console.log(time)
                    setShow(false)
                }}
                onCancel={() => {
                    setShow(false)
                }}
            />
            <Tabbar active="/statistics"></Tabbar>
        </div>
    )
}

export default Statistics
