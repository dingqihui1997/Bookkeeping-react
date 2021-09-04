import React from 'react'
import style from '../../App.module.scss'
import img from 'http://s.yezgea02.com/1616032174786/cryptocurrency.png'
const Login = () => {
    return (
        <div className={`${style.login}`}>
            <div><img src={`${img}`}></img></div>
        </div>
    )
}

export default Login
