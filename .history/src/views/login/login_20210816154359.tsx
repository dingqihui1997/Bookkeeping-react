import React, { useState } from 'react'
import style from '../../App.module.scss'
import shouji from "../../assets/shouji.png"
import suo from '../../assets/suo.png'
const Login = () => {
    let [name, setName] = useState<String[]>(['登录', '注册'])
    let [activeindex, setActiveindex] = useState<number>(0)
    let click = (index: number) => {
        console.log(index);
        setActiveindex(index)
    }
    return (
        <div className={`${style.login}`}>
            <div className={`${style.logintop}`}><img src='http://s.yezgea02.com/1616032174786/cryptocurrency.png' className="img100"></img></div>
            <div className={`${style.loginnav} flex`} >
                {name.map((item: String, index: number) => {
                    return (<div key={index} className={`${style.Sign} font-w7 ${activeindex === index ? style.dysign : ''}`} onClick={() => click(index)}>{item}</div>)
                })}
            </div>
            {activeindex === 0 ? <div>
                <div className='mar-le'>
                    <label><img src={`${shouji}`}></img></label>
                    <input />
                </div>
                <div className='flex'></div>
            </div> : <div></div>
            }
        </div >
    )
}

export default Login
