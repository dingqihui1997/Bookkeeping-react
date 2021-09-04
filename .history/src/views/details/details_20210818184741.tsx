import React, { useState, useReducer, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Icon, NavBar, } from 'zarm';
import styles from '../../App.module.scss'
import api from '../../http/api';
import dayjs from 'dayjs';
interface Obj {
    amount: string
    date: string
    id: number
    pay_type: number
    remark: string
    type_id: number
    type_name: string
    user_id: number
}
const Details = () => {
    let location = useLocation()
    let [id, setId] = useState('')
    let [data, setdata] = useState<Obj | null>(null)
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
    let [oneicon, setOneicon] = useState<any>()
    useEffect(() => {
        let id1 = (location.state as any).id
        billdetail(id1)
    }, [])
    // 获取详情
    let billdetail = (id1: any) => {
        api.billdetail({ id: id1 }).then((res: any) => {
            setdata(res.data)
            setOneicon((icon.find((item: any, index: number) => {
                return item.name === res.data.type_name
            })))
        }).catch(err => {
            console.log(err)
        })
    }
    return (

        <div style={{ height: "100vh", background: "#F5F5F5" }}>
            <NavBar
                left={<Icon type="arrow-left" theme="primary" onClick={() => window.history.back()} />}
                title="账单详情"
            />
            <div className={`${styles.deta} flex-d`}>
                <div className="flex1 flex-ja">
                    <div><i className={`iconfont ${oneicon && oneicon.info} font20 ${styles.infonicon} `}></i></div>
                    <div>{data && data!.type_name}</div>
                </div>
                <div className="flex1 flex-ja">
                    {
                        data && data.amount && data!.pay_type === 1 ? `-${data.amount!}` : `+${data?.amount!}`
                    }
                </div>
                <div className="flex1 ">记录时间：{(dayjs(Number(data && data!.date)).format(`YYYY-MM-DD HH:mm`))}</div>
                <div className="flex1 ">1</div>
            </div>
        </div >
    )
}

export default Details
