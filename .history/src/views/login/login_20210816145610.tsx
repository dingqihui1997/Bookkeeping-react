import React from 'react'
import style from '../../App.module.scss'
const Login = () => {
    return (
        <div className={`${style.login}`}>
            <div className={`${style.logintop}`}><img src='http://s.yezgea02.com/1616032174786/cryptocurrency.png' className="img100"></img></div>
            <div className='flex'>
                <div>登录</div>
                <div>注册</div>
            </div>
        </div>
    )
}

export default Login
