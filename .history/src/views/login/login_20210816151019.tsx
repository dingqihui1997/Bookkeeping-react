import React, { useState } from 'react'
import style from '../../App.module.scss'

const Login = () => {
    let [name, setName] = useState<String[]>(['登录', '注册'])
    return (
        <div className={`${style.login}`}>
            <div className={`${style.logintop}`}><img src='http://s.yezgea02.com/1616032174786/cryptocurrency.png' className="img100"></img></div>
            <div className='flex'>
                {name.map((item: String, index: number) => {
                    return (<div key={index}>{item}</div>)
                })}
            </div>
        </div>
    )
}

export default Login
