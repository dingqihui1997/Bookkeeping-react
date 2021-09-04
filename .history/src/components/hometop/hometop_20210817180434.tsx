import React, { useState, useReducer, useEffect } from 'react'
import { Icon, TabBar, Cell, Button, Popup } from 'zarm';
import { useHistory, } from 'react-router-dom'
import Tabbar from "../../components/tabbar/tabbar";
import styles from '../../App.module.scss'
import api from '../../http/api';
const Hometop = () => {
    const [value, setValue] = useState('');
    let [visible, setVisible] = useState<boolean>(false)
    let list = useState([])
    let list2 = useState([])
    let click = () => {//全部类型
        setVisible(true)
    }
    // 关闭弹框
    let Close = () => {
        setVisible(false)
    }
    useEffect(() => {
        consumption()
    }, [])

    let consumption = () => {
        api.consumption().then((res: any) => {
            console.log(res)
            list = res.data.list.filter((item: any) => {
                item.type == '1'
            })
            console.log(list)
        }).catch(err => {
            console.log(err)
        })
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
                <div style={{ height: 500, background: "#eee" }}>
                    <div className={`${styles.tophometop} flex-ja`}>
                        <div>请选择类型</div>
                        <div className={`${styles.Close}`} onClick={Close}>X</div>
                    </div>
                </div>
            </Popup>
            <Tabbar active='/'></Tabbar>
        </div>
    )
}
export default Hometop
