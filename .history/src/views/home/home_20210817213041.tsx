import React, { useState, useReducer } from 'react'
import { Icon, TabBar, Cell, Button, Popup } from 'zarm';
import { useHistory, } from 'react-router-dom'
import Tabbar from "../../components/tabbar/tabbar";
import styles from '../../App.module.scss'
import Hometop from '../../components/hometop/hometop';
const Home = () => {
    let [visible, setVisible] = useState(false)
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
                    <div className="pad">
                        <div className="flex-sb">
                            <div className='flex'>
                                <div>支出</div>
                                <div>收入</div>
                            </div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </Popup>
            <Tabbar active='/'></Tabbar>
        </div>
    )
}
export default Home
