import React, { useState, useReducer } from 'react'
import { Icon, TabBar, Cell, Button, Popup } from 'zarm';
import { useHistory, } from 'react-router-dom'
import Tabbar from "../../components/tabbar/tabbar";
import styles from '../../App.module.scss'

const Hometop = () => {
    const [value, setValue] = useState('');
    let [visible, setVisible] = useState<boolean>(false)
    let click = () => {
        setVisible(true)
    }
    return (
        <div>
            <div className={`${styles.hometop} `}>
                <div className="flex">
                    <div className='flex1 color3f'>总支出:</div>
                    <div className='flex1 color3f'>总收入:</div>
                </div>
                <div className={`${styles.time} flex-end`}>
                    <div className={`${styles.all} mar5`} onClick={click}>全部类型<i className={`iconfont icon-jiantou9 ${styles.icon}`}></i></div>
                    <div className={`${styles.all}`}>2021-8 <i className={`iconfont icon-jiantou9 ${styles.icon}`}></i></div>
                </div>
            </div>
            <Popup
                visible={visible}
                width="100%"
                afterClose={() => console.log('关闭')}
            >
                <div style={{ height: 450 }}>请选择类型</div>
            </Popup>
            <Tabbar active='/'></Tabbar>
        </div>
    )
}
export default Hometop
