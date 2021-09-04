import React, { useState, useReducer } from 'react'
import { Icon, TabBar, Cell, Button, Popup, DatePicker } from 'zarm';
import { useHistory, } from 'react-router-dom'
import Tabbar from "../../components/tabbar/tabbar";
import styles from '../../App.module.scss'
import Hometop from '../../components/hometop/hometop';
import dayjs from 'dayjs';

const Home = () => {
    let [visible, setVisible] = useState(false)
    let [arr, setArr] = useState(['支出', '收入'])
    let [active, setActive] = useState(0)
    let time = dayjs(new Date()).format(`YYYY-MM-DD`)//当前时间,默认时间
    const [value, setValue] = useState(dayjs(new Date()).format(`MM-DD`));//
    let [show, setShow] = useState(false)

    return (
        <div style={{ height: '100vh', background: '#F5F5F5' }}>
            <Hometop></Hometop>
            <div className={`${styles.bianjidiv} flex-ja`} onClick={() => { setVisible(true) }}><i className={`iconfont icon-bianji ${styles.bianji}`}></i></div>
            <Popup
                visible={visible}
                width="100%"
                afterClose={() => console.log('关闭')}
            >
                <div style={{ height: 470, background: '#fff' }}>
                    <div className="flex-end margin10 pad-t10"><i className={`iconfont icon-shanchu`}></i></div>
                    <div className="padlr10">
                        <div className="flex-sb">
                            <div className='flex'>
                                {arr.map((item: any, index: number) => {
                                    return <div key={index} className={`${styles.zhichu} ${active === index && index == 0 ? styles.zhichu1 : ''} ${active === index && index == 1 ? styles.shouru1 : ''}`} onClick={() => { setActive(index) }}>{item}</div>
                                })}
                            </div>
                            <div className={`${styles.timeicon} flex-ja`} onClick={() => { setShow(true) }}>{value}<i className={`iconfont icon-jiantou9 ${styles.icon}`}></i></div>
                        </div>
                    </div>
                </div>
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
                            // defaultValue={time}
                            mode="date"
                            min="2007-01"
                            max={time}
                            value={value}
                            onOk={(e: any) => {
                                setValue(dayjs(e).format(`MM-DD`))
                                console.log(dayjs(e).format(`MM-DD`))
                                setShow(false)
                            }}
                            onCancel={() => { setShow(false) }}
                        />
                    </div></Popup>
            </Popup>
            <Tabbar active='/'></Tabbar>
        </div>
    )
}
export default Home
