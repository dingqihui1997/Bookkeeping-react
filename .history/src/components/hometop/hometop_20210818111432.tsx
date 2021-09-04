import React, { useState, useReducer, useEffect } from 'react'
import { Icon, TabBar, Cell, Button, Popup, DatePicker } from 'zarm';
import { useHistory, } from 'react-router-dom'
import Tabbar from "../../components/tabbar/tabbar"
import styles from '../../App.module.scss'
import api from '../../http/api';
import dayjs from 'dayjs';
interface props {
    list: any,
    list2: any
}
const Hometop = (props: props) => {
    const [value, setValue] = useState(dayjs(new Date()).format(`YYYY-MM`));//
    let [visible, setVisible] = useState<boolean>(false)
    let list = props.list//支出
    let list2 = props.list2//收入
    let [show, setShow] = useState(false)
    let time = dayjs(new Date()).format(`YYYY-MM`)//当前时间
    let [id, setId] = useState('all')
    // 关闭弹框
    let Close = () => {
        setVisible(false)
    }
    let expend = (e: string) => {//支出 收入

        setId(e)

    }
    return (
        <div>
            <div className={`${styles.hometop} `}>
                <div className="flex">
                    <div className='flex1 color3f'>总支出:</div>
                    <div className='flex1 color3f'>总收入:</div>
                </div>
                <div className={`${styles.time} flex-end`}>
                    <div className={`${styles.all} mar5`} onClick={() => { setVisible(true) }}>全部类型<i className={`iconfont icon-jiantou9 ${styles.icon}`}></i></div>
                    <div className={`${styles.all}`} onClick={() => { setShow(true) }}>{value}<i className={`iconfont icon-jiantou9 ${styles.icon}`}></i></div>
                </div>
            </div>
            <Popup
                visible={visible}
                width="100%"
                afterClose={() => console.log('关闭')}
            >
                <div style={{ height: 500, background: "#eee" }}>
                    <div className={`${styles.tophometop} flex-ja`}>
                        <div>请选择类型</div>
                        <div className={`${styles.Close}`} onClick={Close}>X</div>
                    </div>
                    <div style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 10 }}>
                        <div className={`${styles.all11} ${id == 'all' ? styles.expend : ''}`} onClick={() => expend('all')}>全部类型</div>
                        <div className='mat10'>支出</div>
                        <div className='flex-w mat10'>
                            {list.map((item: any, index: number) => {
                                return (<div key={index} className={`${styles.oneitem} ${item.id == id ? styles.expend : ''}`} onClick={() => expend(item.id)}>{item.name}</div>)
                            })}
                        </div>
                        <div className='mat10'>收入</div>
                        <div className='flex-w mat10'>
                            {list2.map((item: any, index: number) => {
                                return (<div key={index} className={`${styles.oneitem} ${item.id == id ? styles.expend : ''}`} onClick={() => expend(item.id)}>{item.name}</div>)
                            })}
                        </div>
                    </div>
                </div>
            </Popup>
            <Popup
                visible={show}
                width="100%"
                afterClose={() => console.log('关闭')}
            > <div style={{ height: 255, background: "#fff" }}>
                    <DatePicker
                        visible={true}
                        title="选择日期"
                        okText="确定"
                        cancelText="取消"
                        defaultValue={time}
                        mode="month"
                        min="2007-01"
                        max={time}
                        value={value}
                        onOk={(e: any) => {
                            setValue(dayjs(e).format(`YYYY - MM`))
                            console.log(dayjs(e).format(`YYYY - MM`))
                            setShow(false)
                        }}
                    />
                </div></Popup>
            <Tabbar active='/'></Tabbar>
        </div>
    )
}
export default Hometop
