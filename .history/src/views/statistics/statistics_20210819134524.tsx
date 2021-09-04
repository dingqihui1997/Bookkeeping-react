import Tabbar from "../../components/tabbar/tabbar";
import React, { useState, useReducer, useEffect } from 'react'
import styles from '../../App.module.scss'
import { Icon, NavBar, Cell, Progress, DatePicker } from 'zarm';
const MyIcon = Icon.createFromIconfont('//at.alicdn.com/t/font_2754245_bavjvslgobw.js');
import api from "../../http/api";
import dayjs from "dayjs";
import * as echarts from 'echarts';
const Statistics = () => {
    let [time, setTime] = useState(dayjs(new Date()).format(`YYYY-MM`)) //当前时间
    let [show, setShow] = useState(false)
    let [totalExpense, setTotalExpense] = useState(0)
    let [totalIncome, setTotalIncome] = useState(0)
    let [arr, setArr] = useState(['支出', '收入'])
    let [active, setActive] = useState(0)//支出收入控制下标
    let [list, setlist] = useState([])
    let [piechart, setpiechart] = useState([])
    let [num, setnum] = useState(0)
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
    let getdata = (e: number, hour: string) => {
        api.getdata({ date: hour }).then((res: any) => {
            console.log(res)
            setTotalExpense(res.data.total_expense)
            setTotalIncome(res.data.total_income)
            setlist(res.data.total_data)
            let pie = []
            pie = (res.data.total_data.filter((item: any, index: number) => {
                if (e === 0) {
                    return item.pay_type === 1
                } else {
                    return item.pay_type === 2
                }
            }).map((item1: any, index: number) => {
                return {
                    name: item1.type_name,
                    value: item1.number
                }
            }))
            chart(pie)
        }).catch(err => {
            console.log(err)
        })
    }
    let chart = (e: any) => {
        let chartDom = document.getElementById('main');
        let myChart = echarts.init(chartDom!);
        let option;
        option = {
            tooltip: {
                trigger: 'item'
            },
            legend: {
                left: 'center',
            },
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: '50%',
                    data: e,
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };
        option && myChart.setOption(option);
    }
    useEffect(() => {
        getdata(num, time)
    }, [])
    return (
        <div style={{ height: "100vh", background: "#F5F5F5" }}>
            <div className={`${styles.databox} back3f`}>
                <div className="flex-ja font14 mat10" onClick={() => { setShow(true) }}>{time}<span className="margin10 ">|</span><MyIcon type="icon-rili" theme="primary" className="font16" /></div>
                <div className="font14 color1FF flex-ja mat10">总支出</div>
                <div className="color1FF font-w7 font18 flex-ja mat10">￥{totalExpense}</div>
                <div className="a0a0 font12 flex-ja mat10">共收入{totalIncome}</div>
            </div>
            <div className="back3f">
                <div className="flex-sb  mat10 padlr10 pad-t20">
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
                        return <div key={index1} className="mat10 flex-a" style={{ height: 50 }}>
                            <div>  <i className={`iconfont font24 ${iconone && iconone.info} ${item1.pay_type === 1 ? styles.dataicon : styles.dataicon1}`}></i></div>
                            <div className="mal10 font12"> {item1.type_name}</div>
                            <div className="font12 marr10">￥{item1.number}</div>
                            <div className="progress" style={{ width: 230 }}> <Progress
                                shape="line"
                                percent={item1.pay_type === 1 ? Number(((item1.number / totalExpense) * 100).toFixed(2)) : Number(((item1.number / totalIncome) * 100).toFixed(2))}
                                theme={item1.pay_type === 1 ? 'primary' : 'warning'}
                                strokeShape="round"
                                size="md"
                            /></div>
                        </div>
                    })
                    }
                </div>
                <div className="flex-sb  mat10 padlr10 pad-t20">
                    <div className="pad-t10 font18">收支构成</div>
                    <div className="flex font14">
                        {arr.map((item: any, index: number) => {
                            return <div key={index} className={`${styles.dataExpense} ${num === index && index == 0 ? styles.dataExpense1 : ''} ${num === index && index == 1 ? styles.dataIncome : ''}`} onClick={() => { setnum(index), getdata(index, time) }}>{item}</div>
                        })}
                    </div>
                </div>
            </div>
            <div id="main" style={{ width: 320, height: 300 }}></div>
            <DatePicker
                visible={show}
                title="选择日期"
                okText="确定"
                cancelText="取消"
                defaultValue={time}
                mode="month"
                min="2007-01"
                max={dayjs(new Date()).format(`YYYY-MM`)}
                value={time}
                onOk={(e: any) => {
                    setTime(dayjs(e).format(`YYYY-MM`))
                    setShow(false)
                    getdata(num, dayjs(e).format(`YYYY-MM`))
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
