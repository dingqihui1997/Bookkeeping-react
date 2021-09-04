import React, { useState, useReducer, useEffect } from 'react'
import { Keyboard, Popup, DatePicker, Input, Toast } from 'zarm';
import { useHistory, } from 'react-router-dom'
import Tabbar from "../../components/tabbar/tabbar";
import styles from '../../App.module.scss'
import Hometop from '../../components/hometop/hometop';
import api from '../../http/api';
import dayjs from 'dayjs';
import Edit from '../../components/edit/edit';
const Home = () => {
    let history = useHistory()
    let [visible, setVisible] = useState(false)
    let [list, setList] = useState([])//支出
    let [list2, setList2] = useState([])//收入
    let [month, setMonth] = useState(dayjs(new Date()).format(`YYYY-MM`))//月份
    let [type, setType] = useState('all')//类型
    let [billlist, setBilllist] = useState([])//账单列表
    let [totalExpense, setTotalExpense] = useState(0)
    let [totalIncome, setTotalIncome] = useState(0)
    let [icon, setIcon] = useState([
        { name: '餐饮', info: 'icon-canyin' },
        { name: '服饰', info: 'icon-yifu' },
        { name: '交通', info: 'icon-che' },
        { name: '日用', info: 'icon-01f' },
        { name: '购物', info: 'icon-gwc' },
        { name: '学习', info: 'icon-xuexi' },
        { name: '医疗', info: 'icon-yiliaohangyedeICON-' },
        { name: '旅行', info: 'icon-ico' },
        { name: '人情', info: 'icon-wangzhantubiaoji2_huaban1fuben23' },
        { name: '其他', info: 'icon-tubiaozhizuomoban' }])
    let [icon1, setIcon1] = useState([
        { name: '工资', info: 'icon-cardb' },
        { name: '奖金', info: 'icon-qianmoney47' },
        { name: '转账', info: 'icon-zhuanzhang' },
        { name: '理财', info: 'icon-licai' },
        { name: '退款', info: 'icon-tuikuan' },
        { name: '其他', info: 'icon-tubiaozhizuomoban' }])
    let [iconone, seticonone] = useState<any>(null)
    let iconfont = icon.concat(icon1)
    useEffect(() => {
        consumption()
        bill(type, month)
    }, [])
    let consumption = () => {//获取消费类型
        api.consumption().then((res: any) => {
            // console.log(res)
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
    let choice = (time: any, id: any) => {//选择类型和时间
        // console.log(time, id)
        bill(id, time)
    }
    // 获取账单列表
    let bill = (type1: any, month1: any) => {
        api.bill({ date: month1, page: 1, page_size: 5, type_id: type1 }).then((res) => {
            // console.log(res)
            setBilllist(res.data.list)
            setTotalExpense(res.data.totalExpense)
            setTotalIncome(res.data.totalIncome)
        }).catch(err => {
            console.log(err)
        })
    }
    // 添加账单
    let setvisible1 = () => {
        setVisible(false)
    }
    // 跳转详情
    let goto = (item: any) => {
        // console.log(item)
        history.push('/details', { id: item.id })
    }
    return (
        <div style={{ background: '#F5F5F5' }}>
            <div className={`${styles.Hometop}`}>
                <Hometop list={list} list2={list2} choice={choice} totalExpense={totalExpense} totalIncome={totalIncome}></Hometop>
            </div>
            <div style={{ height: 80 }}></div>
            {billlist.length ? <div>
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
                                iconone = (iconfont.find((icon: any, index: number) => {
                                    return icon.name === item1.type_name
                                }))
                            }
                            return <div className={`${styles.boxcontent} flex-dj`} key={index} onClick={() => { goto(item1) }}>
                                <div className="flex-sba" style={{ height: 45 }}>
                                    <div className="flex-a">
                                        <div><i className={`font26-icon iconfont ${iconone && iconone.info} ${item1.pay_type === 1 ? styles.infonicon : styles.infonicon1}`}></i></div>
                                        <div>{item1.type_name}</div>
                                    </div>
                                    <div className={`${item1.pay_type == 1 ? styles.expenditure : styles.income1}`}>{item1.pay_type == 1 ? "-" + item1.amount : "+" + item1.amount}</div>
                                </div>
                                <div className="font12">{dayjs(Number(item1.date)).format(`HH:MM`)}</div>
                            </div>
                        })}
                    </div>
                })}
            </div> : <div className={`${styles.imgeshuju}`}><img src="http://s.yezgea02.com/1619144597039/empty.png"></img></div>}
            <div className={`${styles.bianjidiv} flex-ja`} onClick={() => { setVisible(true) }}><i className={`iconfont icon-bianji ${styles.bianji}`}></i></div>
            <Edit visible={visible} setvisible={setvisible1}></Edit>
            <div style={{ height: 50 }}></div>
            <Tabbar active='/'></Tabbar>
        </div>
    )
}
export default Home
