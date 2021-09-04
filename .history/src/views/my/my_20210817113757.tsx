import React, { useEffect, useState } from 'react'
import styles from '../../App.module.scss'
import Tabbar from "../../components/tabbar/tabbar";
import api from '../../http/api';
import { Cell } from 'zarm';
const My = () => {
    let [name, setName] = useState('')
    let [signature, setSignature] = useState<string>('')
    let [avatar, setAvatar] = useState<string>('')//头像
    useEffect(() => {
        get_userinfo()
    }, [])
    let get_userinfo = () => {
        api.get_userinfo().then(res => {
            console.log(res)
            setName(res.data.username)
            setSignature(res.data.signature)
            setAvatar(res.data.avatar)
        }).catch(err => {
            console.log(err
            )
        })
    }
    return (
        <div>
            <div className={`${styles.myimg} flex-sb`}>
                <div>
                    <div className={`${styles.myname}`}>昵称：{name}</div>
                    <div className={`${styles.imgicon} flex`}><img src="http://s.yezgea02.com/1615973630132/geqian.png" className="img100"></img> <span>{signature}</span></div>
                </div>
                <div className={`${styles.avatarimg}`}><img src={avatar} className="img100"></img></div>
            </div>
            <div>


                <Cell
                    hasArrow
                    title="用户信息修改"
                    icon={<img alt="" src='http://s.yezgea02.com/1615974766264/gxqm.png' style={{ width: 20, height: 20 }} />}

                />

                <Cell
                    hasArrow
                    title="重置密码"
                    icon={<img alt="" src='http://s.yezgea02.com/1615974766264/zhaq.png' style={{ width: 20, height: 20 }} />}

                />
                <Cell
                    hasArrow
                    title="关于我们"
                    icon={<img alt="" src='http://s.yezgea02.com/1615975178434/lianxi.png' style={{ width: 20, height: 20 }} />}
                />
            </div>
            <Tabbar active='/my'></Tabbar>
        </div>
    )
}

export default My
