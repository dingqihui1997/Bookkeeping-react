import React, { useState } from 'react'
import style from '../../App.module.scss'
import shouji from "../../assets/shouji.png"
import suo from '../../assets/suo.png'
import { Button, Cell, Checkbox } from "zarm"
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
                <div className='mar-le20 flex-a'>
                    <label><img src={`${shouji}`} className={`${style.iconimg}`}></img></label>
                    <input className={`${style.int}`} placeholder="请输入账号" />
                </div>
                <div className='mar-le20 flex-a'>
                    <label><img src={`${suo}`} className={`${style.iconimg}`}></img></label>
                    <input className={`${style.int}`} placeholder="请输入密码" />
                </div>
                <div className='mar-le20 marr20'> <Button block theme="primary">
                    登录
                </Button></div>

            </div> : <div>
                <div className='mar-le20 flex-a'>
                    <label><img src={`${shouji}`} className={`${style.iconimg}`}></img></label>
                    <input className={`${style.int}`} placeholder="请输入账号" />
                </div>
                <div className='mar-le20 flex-a'>
                    <label><img src={`${suo}`} className={`${style.iconimg}`}></img></label>
                    <input className={`${style.int}`} placeholder="请输入密码" />
                </div>
                <div className='mar-le20 flex-a'>
                    <label><img src={`${suo}`} className={`${style.iconimg}`}></img></label>
                    <input className={`${style.int}`} placeholder="请输入验证码" />
                    <div>9999</div>
                </div>
                <div className='mar-le20 a0a0'>
                    <Checkbox id="agreement" />
                    <label htmlFor="agreement" style={{ marginLeft: 10, fontSize: 14 }}>
                        阅读并同意掘掘手札条款
                    </label>
                </div>
                <div className='mar-le20 marr20'> <Button block theme="primary">
                    登录
                </Button></div>
            </div>
            }
        </div >
    )
}

export default Login
