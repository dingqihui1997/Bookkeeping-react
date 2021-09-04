import React, { useState, useReducer, useEffect } from 'react'
import { Keyboard, Popup, DatePicker, Input, Toast } from 'zarm';
import { useHistory, } from 'react-router-dom'
import Tabbar from "../../components/tabbar/tabbar";
import styles from '../../App.module.scss'
import Hometop from '../../components/hometop/hometop';
import api from '../../http/api';
import dayjs from 'dayjs';
const Home = () => {
    let history = useHistory()
    let [visible, setVisible] = useState(false)
    let [arr, setArr] = useState(['支出', '收入'])
    let [active, setActive] = useState(0)//支出收入控制下标
    let [list, setList] = useState([])//支出
    let [list2, setList2] = useState([])//收入
    const [value1, setValue1] = useState(dayjs(new Date()).format(`YYYY-MM-DD HH:mm:ss`));//当前时间
    let [show, setShow] = useState(false)//时间弹框
    let [expend, setExpend] = useState(0)
    let [income, setIncome] = useState(0)//收入下标
    let [flag, setFlag] = useState(true)
    const [content, setContent] = useState('');//备注
    let [price, setPrice] = useState('')//金额
    let [name, setName] = useState('餐饮')
    let [id, setId] = useState(1)
    let [month, setMonth] = useState(dayjs(new Date()).format(`YYYY-MM`))//月份
    let [type, setType] = useState('all')//类型
    let [billlist, setBilllist] = useState([])//账单列表
    let [totalExpense, setTotalExpense] = useState(0)
    let [totalIncome, setTotalIncome] = useState(0)
    let [icon, setIcon] = useState(['icon-canyin', 'icon-yifu', 'icon-che', 'icon-01f', 'icon-gwc', 'icon-xuexi', 'icon-yiliaohangyedeICON-', 'icon-ico', 'icon-wangzhantubiaoji2_huaban1fuben23', 'icon-tubiaozhizuomoban'])
    let [icon1, setIcon1] = useState(['icon-cardb', 'icon-qianmoney47', 'icon-zhuanzhang', 'icon-licai', 'icon-tuikuan', 'icon-tubiaozhizuomoban'])
    let [iconone, seticonone] = useState<any>(null)
    let [icon2, setIcon2] = useState([
        { name: '餐饮', info: 'icon-canyin' },
        { name: '服饰', info: 'icon-yifu' },
        { name: '交通', info: 'icon-che' },
        { name: '日用', info: 'icon-01f' },
        { name: '购物', info: 'icon-gwc' },
        { name: '学习', info: 'icon-xuexi' },
        { name: '医疗', info: 'icon-yiliaohangyedeICON-' },
        { name: '旅行', info: 'icon-ico' },
        { name: '人情', info: 'icon-wangzhantubiaoji2_huaban1fuben23' },
        { name: '其他', info: 'icon-tubiaozhizuomoban' },
        { name: '工资', info: 'icon-cardb' },
        { name: '奖金', info: 'icon-qianmoney47' },
        { name: '转账', info: 'icon-zhuanzhang' },
        { name: '理财', info: 'icon-licai' },
        { name: '退款', info: 'icon-tuikuan' },
        { name: '其他', info: 'icon-tubiaozhizuomoban' }])
    useEffect(() => {
        consumption()
        bill(type, month)
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
            if (!active && !expend) { setId(1), setName('餐饮') }
            if (active && !income) { setId(11), setName('工资') }
            let oldTime = ((dayjs(value1)).valueOf());
            console.log(oldTime)
            price ? addbill(name, oldTime) : Toast.show('请输入金额')
            console.log(name)
        } else if (key == 'close') {
            console.log('close')
        } else {
            setPrice(price += key)
            console.log(price)
        }
    }
    let choice = (time: any, id: any) => {
        bill(id, time)
    }
    // 点击消费类型
    let click = (item: any, index: number) => {
        setExpend(index)
        setId(item.id)
        setName(item.name)
    }
    // 获取账单列表
    let bill = (type1: any, month1: any) => {
        api.bill({ date: month1, page: 1, page_size: 5, type_id: type1 }).then((res) => {
            console.log(res)
            setBilllist(res.data.list)
            setTotalExpense(res.data.totalExpense)
            setTotalIncome(res.data.totalIncome)
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
                setVisible(false)
            }
        }).catch(err => {
            console.log(err)
        })
    }
    // 跳转详情
    let goto = (item: any) => {
        console.log(item)
        history.push('/details', { id: item.id })
    }
    return (
        <div style={{ background: '#F5F5F5' }}>
            <div className={`${styles.Hometop}`}>
                <Hometop list={list} list2={list2} choice={choice} totalExpense={totalExpense} totalIncome={totalIncome}></Hometop>
            </div>
            <div style={{ height: 80 }}></div>
            <div>
                {billlist.map((item: any, index: number) => {
                    let num = 0
                    let num1 = 0
                    {
                        item.bills.map((item1: any, index1: number) => {
                            if (item1.pay_type == 1) {
                                num += Number(item1.amount)
                            } else {
                                num1 += Number(item1.amount)
                            }
                        })
                    }
                    return <div key={index} className={`${styles.boxbill} mat10`}>
                        <div className={`${styles.billtop} flex-sba mal10`}>
                            <div className='font-w7'>{item.date}</div>
                            <div className="flex-ja">
                                <div className="flex-ja"><img src="http://s.yezgea02.com/1615953405599/zhi%402x.png" className="shouzhi"></img><span className="font12  margin-r10">￥{num}</span></div>
                                <div className="flex-ja"><img src='http://s.yezgea02.com/1615953405599/shou%402x.png' className="shouzhi" /><span className="font12"> ￥{num1}</span></div>
                            </div>
                        </div>
                        {item.bills.map((item1: any, index: number) => {

                            {
                                seticonone((icon2.find((icon: any, index: number) => {
                                    return icon.name === item1.type_name
                                })))
                            }

                            return <div className={`${styles.boxcontent} flex-dj`} key={index} onClick={() => { goto(item1) }}>

                                <div className="flex-sba" style={{ height: 45 }}>
                                    <div>
                                        <div><i className={`iconfont ${iconone.info}`}></i></div>
                                        <div></div>
                                        {item1.type_name}</div>
                                    <div className={`${item1.pay_type == 1 ? styles.expenditure : styles.income1}`}>{item1.pay_type == 1 ? "-" + item1.amount : "+" + item1.amount}</div>
                                </div>
                                <div className="font12">{dayjs(Number(item1.date)).format(`HH:MM`)}</div>
                            </div>
                        })}

                    </div>
                })}
            </div>
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
                <Popup
                    visible={show}
                    width="100%"
                    afterClose={() => console.log('关闭')}
                > <div style={{ height: 255, background: "#fff" }}>
                        <DatePicker
                            visible={true}
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
                    </div></Popup>
            </Popup>
            <div style={{ height: 50 }}></div>
            <Tabbar active='/'></Tabbar>
        </div>
    )
}
export default Home
