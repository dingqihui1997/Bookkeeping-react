import Tabbar from "../../components/tabbar/tabbar";
import React, { useState, useReducer, useEffect } from 'react'
import styles from '../../App.module.scss'
import { Icon, NavBar, Cell, Button, DatePicker } from 'zarm';
const MyIcon = Icon.createFromIconfont('//at.alicdn.com/t/font_2754245_bavjvslgobw.js');
import api from "../../http/api";
import dayjs from "dayjs";
const Statistics = () => {
    let [time, setTime] = useState(dayjs(new Date()).format(`YYYY-MM`)) //当前时间
    let [show, setShow] = useState(false)
    let [totalExpense, setTotalExpense] = useState(0)
    let [totalIncome, setTotalIncome] = useState(0)
    let getdata = () => {
        api.getdata({ date: time }).then((res: any) => {
            console.log(res)
            setTotalExpense(res.data.total_expense)
            setTotalIncome(res.data.total_income)
        }).catch(err => {
            console.log(err)
        })
    }
    useEffect(() => { getdata() }, [])
    return (
        <div style={{ height: "100vh", background: "#F5F5F5" }}>
            <div className={`${styles.databox} back3f`}>
                <div className="flex-ja font14 mat10" onClick={() => { setShow(true) }}>{time}<span className="margin10 ">|</span><MyIcon type="icon-rili" theme="primary" className="font16" /></div>
                <div className="font14 color1FF flex-ja mat10">总支出</div>
                <div className="color1FF font-w7 font18 flex-ja mat10">￥{totalExpense}</div>
                <div className="a0a0 font12 flex-ja mat10">共收入{totalIncome}</div>
            </div>
            <div className="flex-sb back3f mat10 padlr10 ">
                <div className="pad-t10 font18">收支构成</div>
                <div className="flex">
                    <div>支出</div>
                    <div>收入</div>
                </div>
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
                    setTime(dayjs(e).format(`YYYY-MM`))
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
