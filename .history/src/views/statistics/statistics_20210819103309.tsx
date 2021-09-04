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
    let [arr, setArr] = useState(['支出', '收入'])
    let [active, setActive] = useState(0)//支出收入控制下标
    let [list, setlist] = useState([])
    let [iconone, seticonone] = useState<any>(null)
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
        { name: '其他', info: 'icon-tubiaozhizuomoban' },
        { name: '工资', info: 'icon-cardb' },
        { name: '奖金', info: 'icon-qianmoney47' },
        { name: '转账', info: 'icon-zhuanzhang' },
        { name: '理财', info: 'icon-licai' },
        { name: '退款', info: 'icon-tuikuan' },
        { name: '其他', info: 'icon-tubiaozhizuomoban' }])
    let getdata = () => {
        api.getdata({ date: time }).then((res: any) => {
            console.log(res)
            setTotalExpense(res.data.total_expense)
            setTotalIncome(res.data.total_income)
            setlist(res.data.total_data)
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
            <div>
                <div className="flex-sb back3f mat10 padlr10 pad-t20">
                    <div className="pad-t10 font18">收支构成</div>
                    <div className="flex font14">
                        {arr.map((item: any, index: number) => {
                            return <div key={index} className={`${styles.dataExpense} ${active === index && index == 0 ? styles.dataExpense1 : ''} ${active === index && index == 1 ? styles.dataIncome : ''}`} onClick={() => { setActive(index) }}>{item}</div>
                        })}
                    </div>
                </div>
                <div>

                    {list.sort((a: any, b: any) => {
                        return b.number - a.number
                    }).filter((item: any, index: number) => {
                        return item.pay_type === active + 1
                    }).map((item1: any, index1: number) => {
                        {
                            iconone = (icon.find((icon: any, index: number) => {
                                return icon.name === item1.type_name
                            }))
                        }
                        return <div key={index1}>
                            <i className={`iconfont ${iconone && iconone.info} ${item1.pay_type === 1 ? styles.infonicon : styles.infonicon1}`}></i>
                            {item1.type_name}
                        </div>
                    })
                    }
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
