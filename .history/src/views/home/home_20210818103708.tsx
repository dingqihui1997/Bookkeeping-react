import React, { useState, useReducer, useEffect } from 'react'
import { Icon, TabBar, Cell, Keyboard, Popup, DatePicker, Input } from 'zarm';
import { useHistory, } from 'react-router-dom'
import Tabbar from "../../components/tabbar/tabbar";
import styles from '../../App.module.scss'
import Hometop from '../../components/hometop/hometop';
import api from '../../http/api';
import dayjs from 'dayjs';

const Home = () => {
    let [visible, setVisible] = useState(false)
    let [arr, setArr] = useState(['支出', '收入'])
    let [active, setActive] = useState(0)//支出收入控制下标
    let [list, setList] = useState([])//支出
    let [list2, setList2] = useState([])//收入
    let time = dayjs(new Date()).format(`YYYY-MM-DD`)//当前时间,默认时间
    const [value, setValue] = useState(dayjs(new Date()).format(`MM-DD`));//
    let [show, setShow] = useState(false)//时间弹框
    let [expend, setExpend] = useState(0)
    let [income, setIncome] = useState(0)//收入下标
    let [flag, setFlag] = useState(true)
    const [content, setContent] = useState('');//备注
    let [price, setPrice] = useState('')//金额
    let [name, setName] = useState('餐饮')
    let [id, setId] = useState(1)
    let [icon, setIcon] = useState(['icon-canyin', 'icon-yifu', 'icon-che', 'icon-01f', 'icon-gwc', 'icon-xuexi', 'icon-yiliaohangyedeICON-', 'icon-ico', 'icon-wangzhantubiaoji2_huaban1fuben23', 'icon-tubiaozhizuomoban'])
    let [icon1, setIcon1] = useState(['icon-cardb', 'icon-qianmoney47', 'icon-zhuanzhang', 'icon-licai', 'icon-tuikuan', 'icon-tubiaozhizuomoban'])
    useEffect(() => {
        consumption()
    }, [])
    let consumption = () => {//获取消费类型
        api.consumption().then((res: any) => {
            console.log(res)
            setList(res.data.list.filter((item: any) => {
                return item.type === '1'
            }))
            setList2(res.data.list.filter((item: any) => {
                return item.type === '2'
            }))
        }).catch(err => {
            console.log(err)
        })
    }
    let upkey = (key: any) => {//键盘事件
        if (key == 'delete') {
            // if (price) {
            //     setPrice(price.substr(0, price.length - 1))
            // }
        } else if (key == 'ok') {
            console.log('ok')
        } else if (key == 'close') {
            console.log('close')
        } else {
            setPrice(price += key)
            console.log(price)
        }
    }
    // 点击消费类型
    let click = (item: any, index: number) => {
        setExpend(index)
        setId(item.id)
        setName(item.name)
    }
    // 添加账单
    let addbill = () => {
        let pay = 1//账单类型
        active ? pay = 2 : pay = 1
        if (!active && !expend) setId(1), setName('餐饮')
        if (active && !income) setId(11), setName('工资')
        let oldTime = (new Date(value)).getTime();
        api.addbill({ amount: Number(price), type_id: id, type_name: name, date: date, pay_type: pay, remark: content }).then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
    }
    return (
        <div style={{ height: '100vh', background: '#F5F5F5' }}>
            <Hometop list={list} list2={list2}></Hometop>
            <div className={`${styles.bianjidiv} flex-ja`} onClick={() => { setVisible(true) }}><i className={`iconfont icon-bianji ${styles.bianji}`}></i></div>
            <Popup
                visible={visible}
                width="100%"
                afterClose={() => setVisible(false)}
                onMaskClick={() => setVisible(false)}
            >
                <div style={{ background: '#fff' }}>
                    <div className="flex-end margin10 pad-t10"><i className={`iconfont icon-shanchu`} onClick={() => { setVisible(false) }}></i></div>
                    <div className="padlr10">
                        <div className="flex-sb">
                            <div className='flex'>
                                {arr.map((item: any, index: number) => {
                                    return <div key={index} className={`${styles.zhichu} ${active === index && index == 0 ? styles.zhichu1 : ''} ${active === index && index == 1 ? styles.shouru1 : ''}`} onClick={() => { setActive(index) }}>{item}</div>
                                })}
                            </div>
                            <div className={`${styles.timeicon} flex-ja`} onClick={() => { setShow(true) }}>{value}<i className={`iconfont icon-jiantou9 ${styles.icon}`}></i></div>
                        </div>
                        <div className={`${styles.moeny}`}>￥{price}</div>
                        {active === 0 ? <div className={`flex ${styles.boxicon}`}>
                            <div className={`flex nowap`}>
                                {list.map((item: any, index: number) => {
                                    return <div key={index} className={`${styles.iconexpend}`} onClick={() => click(item, index)}>
                                        <div className={`flex-ja ${styles.iconitem} ${index == expend ? styles.activeicon : ''}`}>
                                            <i className={`iconmap iconfont ${icon[index]}`}></i>
                                        </div>
                                        <div className="font14">{item.name}</div>
                                    </div>
                                })}
                            </div>
                        </div> : <div className={`flex ${styles.boxicon}`}>
                            {list2.map((item: any, index: number) => {
                                return <div key={index} className={`${styles.iconexpend}`} onClick={() => { setIncome(index), setId(item.id) }}>
                                    <div className={`flex-ja ${styles.iconitem} ${index == income ? styles.activeicon1 : ''}`}>
                                        <i className={`iconmap iconfont ${icon1[index]}`}></i>
                                    </div>
                                    <div className="font14">{item.name}</div>
                                </div>
                            })}
                        </div>}
                        {flag ? <div className={`${styles.addremarks}`} onClick={() => { setFlag(false) }}>添加备注</div> : <div className={`${styles.autoinput}`}>
                            <Input
                                rows={3}
                                autoHeight
                                showLength
                                maxLength={50}
                                type="text"
                                placeholder="请输入备注信息"
                                value={content}
                                onChange={() => setContent}
                            />
                        </div>}
                    </div>
                    <Keyboard type="price" onKeyClick={(key: any) => upkey(key)} />
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
