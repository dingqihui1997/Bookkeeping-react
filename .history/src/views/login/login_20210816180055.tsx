import React, { useState, useEffect } from 'react'
import style from '../../App.module.scss'
import shouji from "../../assets/shouji.png"
import suo from '../../assets/suo.png'
import { Button, Cell, Checkbox, Toast } from "zarm"
const Login = () => {
    let [name, setName] = useState<String[]>(['登录', '注册'])
    let [activeindex, setActiveindex] = useState<number>(0)//下标
    let [user, setUser] = useState<string>('')//账号
    let [password, setPasswprd] = useState<string>('')//密码
    let [yanzheng, setYanzheng] = useState<string>('')//验证码
    let [value, setValue] = useState<boolean>(false)
    let num = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", 1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
    let [arr, setArr] = useState<any[]>([])
    // 点击tab
    let click = (index: number) => {
        console.log(index);
        setActiveindex(index)
    }
    // 切换验证码
    let code = () => {
        let arr1 = []
        if (num.length === 0) {
            num = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", 1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
        } else {
            arr1 = []
            for (var i = 0; i < 4; i++) {
                var rdm = Math.floor(Math.random() * num.length)
                arr1.push(num[rdm])
                num.splice(rdm, 1)
            }
        }
        setArr(arr1)
    }
    let input = (e: any) => {//账号
        setUser((e.target as any).value)
    }
    let input1 = (e: any) => {//密码
        setPasswprd((e.target as any).value)
    }
    let input2 = (e: any) => {//验证码
        setYanzheng((e.target as any).value)
    }
    let change = (e: any) => {//复选框
        setValue((e.target as any).checked)
    }
    let register = () => {//注册
        if (!user) {
            Toast.show('请输入账号')
        } else if (!password) {
            Toast.show('请输入密码')
        } else if (yanzheng) {
            Toast.show('请输入密码')

        }
    }
    useEffect(() => {
        code()
    }, [])
    // 点击验证码
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
                    <input className={`${style.int}`} placeholder="请输入账号" onInput={(e) => input(e)} />
                </div>
                <div className='mar-le20 flex-a'>
                    <label><img src={`${suo}`} className={`${style.iconimg}`}></img></label>
                    <input className={`${style.int}`} placeholder="请输入密码" onInput={(e) => input1(e)} />
                </div>
                <div className='mar-le20 flex-a'>
                    <label><img src={`${suo}`} className={`${style.iconimg}`}></img></label>
                    <input className={`${style.int}`} placeholder="请输入验证码" onInput={(e) => input2(e)} />
                    <div onClick={code}>{arr}</div>
                </div>
                <div className='mar-le20 a0a0'>
                    <Checkbox id="agreement" checked={value} onChange={(e) => change(e)} />
                    <label htmlFor="agreement" style={{ marginLeft: 10, fontSize: 14 }}>
                        阅读并同意掘掘手札条款
                    </label>
                </div>
                <div className='mar-le20 marr20' onClick={register}> <Button block theme="primary">
                    注册
                </Button></div>
            </div>
            }
        </div >
    )
}

export default Login
