import React, { useState, useReducer, useEffect } from 'react'
import { Keyboard, Popup, DatePicker, Input, Toast } from 'zarm';
import styles from '../../App.module.scss'
import dayjs from 'dayjs';
import api from '../../http/api';
import { useHistory, } from 'react-router-dom'

interface props {
    data?: any
    // num?: number
    visible: boolean
    setvisible: () => void
    success?: (res: any) => void
}
const edit = (props: props) => {
    let history = useHistory()
    let [active, setActive] = useState(0)//支出收入控制下标
    let [show, setShow] = useState(false)//时间弹框
    let [arr, setArr] = useState(['支出', '收入'])
    let [price, setPrice] = useState('')//金额
    let [list, setList] = useState([])//支出
    let [list2, setList2] = useState([])//收入
    const [value1, setValue1] = useState(dayjs(new Date()).format(`YYYY-MM-DD HH:mm:ss`));//当前时间
    let [expend, setExpend] = useState(0)
    let [income, setIncome] = useState(0)//收入下标
    let [name, setName] = useState('餐饮')
    let [id, setId] = useState(1)
    let [flag, setFlag] = useState(true)
    const [content, setContent] = useState('');//备注
    let [icon, setIcon] = useState(['icon-canyin', 'icon-yifu', 'icon-che', 'icon-01f', 'icon-gwc', 'icon-xuexi', 'icon-yiliaohangyedeICON-', 'icon-ico', 'icon-wangzhantubiaoji2_huaban1fuben23', 'icon-tubiaozhizuomoban'])
    let [icon1, setIcon1] = useState(['icon-cardb', 'icon-qianmoney47', 'icon-zhuanzhang', 'icon-licai', 'icon-tuikuan', 'icon-tubiaozhizuomoban'])
    let click = (item: any, index: number) => {
        setExpend(index)
        setId(item.id)
        setName(item.name)
    }
    let upkey = (key: any) => {//键盘事件
        if (key == 'delete') {
        } else if (key == 'ok') {
            if (!active && !expend) { setId(1), setName('餐饮') }
            if (active && !income) { setId(11), setName('工资') }
            let oldTime = ((dayjs(value1)).valueOf());
            console.log(oldTime)
            price ? (props.data ? addbill(name, oldTime) : update(name, oldTime)) : Toast.show('请输入金额')
            console.log(name)
        } else if (key == 'close') {
            console.log('close')
        } else {
            setPrice(price += key)
            console.log(price)
        }
    }
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
    // 编辑账单
    let update = (typename: any, oldTime: any) => {
        let pay = 1//账单类型
        active ? pay = 2 : pay = 1
        api.update({ id: props.data.id, amount: Number(price), type_id: id, type_name: typename, date: oldTime, pay_type: pay, remark: content }).then((res: any) => {
            console.log(res)
            if (res.code === 200) {
                props.setvisible()
                props.success(res)
            }
        }).catch(err => {
            console.log(err)
        })
    }
    // 添加账单
    let addbill = (typename: any, oldTime: any) => {
        let pay = 1//账单类型
        active ? pay = 2 : pay = 1
        api.addbill({ amount: Number(price), type_id: id, type_name: typename, date: oldTime, pay_type: pay, remark: content }).then((res: any) => {
            console.log(res)
            if (res.code === 200) {
                props.setvisible()
            }
        }).catch(err => {
            console.log(err)
        })
    }
    return (
        <div>
            <Popup
                visible={props.visible}
                width="100%"
                afterClose={() => props.setvisible()}
                onMaskClick={() => props.setvisible()}
            >
                <div style={{ background: '#fff' }}>
                    <div className="flex-end margin10 pad-t10"><i className={`iconfont icon-shanchu`} onClick={() => { props.setvisible() }}></i></div>
                    <div className="padlr10">
                        <div className="flex-sb">
                            <div className='flex'>
                                {arr.map((item: any, index: number) => {
                                    return <div key={index} className={`${styles.zhichu} ${active === index && index == 0 ? styles.zhichu1 : ''} ${active === index && index == 1 ? styles.shouru1 : ''}`} onClick={() => { setActive(index) }}>{item}</div>
                                })}
                            </div>
                            <div className={`${styles.timeicon} flex-ja`} onClick={() => { setShow(true) }}>{dayjs(value1).format(`MM-DD`)}<i className={`iconfont icon-jiantou9 ${styles.icon}`}></i></div>
                        </div>
                        <div className={`${styles.moeny}`}>￥{price}</div>
                        {active === 0 ? <div className={`flex ${styles.boxicon}`}>
                            <div className={`flex nowap`}>
                                {list.map((item: any, index: number) => {
                                    return <div key={index} className={`${styles.iconexpend}`} onClick={() => { click(item, index), setName(item.name) }}>
                                        <div className={`flex-ja ${styles.iconitem} ${index == expend ? styles.activeicon : ''}`}>
                                            <i className={`iconmap iconfont ${icon[index]}`}></i>
                                        </div>
                                        <div className="font14">{item.name}</div>
                                    </div>
                                })}
                            </div>
                        </div> : <div className={`flex ${styles.boxicon}`}>
                            {list2.map((item: any, index: number) => {
                                return <div key={index} className={`${styles.iconexpend}`} onClick={() => { setIncome(index), setId(item.id), setName(item.name) }}>
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
                                onChange={(value: any) => { setContent(value) }}
                            />
                        </div>}
                    </div>
                    <Keyboard type="price" onKeyClick={(key: any) => upkey(key)} />
                </div>
                <DatePicker
                    visible={show}
                    defaultValue={value1}
                    mode="datetime"
                    min="2007-01-01"
                    max={dayjs(new Date()).format(`YYYY-MM-DD HH:mm:ss`)}
                    value={value1}
                    onOk={(e: any) => {
                        setValue1(e)
                        setShow(false)
                        console.log(value1)
                    }}
                    onCancel={() => { setShow(false) }}
                />
            </Popup>
        </div>
    )
}

export default edit
