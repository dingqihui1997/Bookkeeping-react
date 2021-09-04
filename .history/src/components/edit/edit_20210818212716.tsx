import React, { useState, useReducer, useEffect } from 'react'
import { Keyboard, Popup, DatePicker, Input, Toast } from 'zarm';
import styles from '../../App.module.scss'
import dayjs from 'dayjs';


const edit = () => {

    let [active, setActive] = useState(0)//支出收入控制下标
    let [show, setShow] = useState(false)//时间弹框
    let [visible, setVisible] = useState(false)
    let [arr, setArr] = useState(['支出', '收入'])
    let [price, setPrice] = useState('')//金额
    let [list, setList] = useState([])//支出
    let [list2, setList2] = useState([])//收入
    const [value1, setValue1] = useState(dayjs(new Date()).format(`YYYY-MM-DD HH:mm:ss`));//当前时间

    return (
        <div>
            <Popup
                visible={visible}
                width="100%"
                afterClose={() => setVisible(false)}
                onMaskClick={() => setVisible(false)}
            >
                <div style={{ background: '#fff' }}>
                    <div className="flex-end margin10 pad-t10"><i className={`iconfont icon-shanchu`} onClick={() => { setVisible(false) }}></i></div>
                    <div className="padlr10">
                        <div className="flex-sb">
                            <div className='flex'>
                                {arr.map((item: any, index: number) => {
                                    return <div key={index} className={`${styles.zhichu} ${active === index && index == 0 ? styles.zhichu1 : ''} ${active === index && index == 1 ? styles.shouru1 : ''}`} onClick={() => { setActive(index) }}>{item}</div>
                                })}
                            </div>
                            <div className={`${styles.timeicon} flex-ja`} onClick={() => { setShow(true) }}>{dayjs(value1).format(`MM-DD`)}<i className={`iconfont icon-jiantou9 ${styles.icon}`}></i></div>
                        </div>
                        <div className={`${styles.moeny}`}>￥{price}</div>
                        {active === 0 ? <div className={`flex ${styles.boxicon}`}>
                            <div className={`flex nowap`}>
                                {list.map((item: any, index: number) => {
                                    return <div key={index} className={`${styles.iconexpend}`} onClick={() => { click(item, index), setName(item.name) }}>
                                        <div className={`flex-ja ${styles.iconitem} ${index == expend ? styles.activeicon : ''}`}>
                                            <i className={`iconmap iconfont ${icon[index]}`}></i>
                                        </div>
                                        <div className="font14">{item.name}</div>
                                    </div>
                                })}
                            </div>
                        </div> : <div className={`flex ${styles.boxicon}`}>
                            {list2.map((item: any, index: number) => {
                                return <div key={index} className={`${styles.iconexpend}`} onClick={() => { setIncome(index), setId(item.id), setName(item.name) }}>
                                    <div className={`flex-ja ${styles.iconitem} ${index == income ? styles.activeicon1 : ''}`}>
                                        <i className={`iconmap iconfont ${icon1[index]}`}></i>
                                    </div>
                                    <div className="font14">{item.name}</div>
                                </div>
                            })}
                        </div>}
                        {flag ? <div className={`${styles.addremarks}`} onClick={() => { setFlag(false) }}>添加备注</div> : <div className={`${styles.autoinput}`}>
                            <Input
                                rows={3}
                                autoHeight
                                showLength
                                maxLength={50}
                                type="text"
                                placeholder="请输入备注信息"
                                value={content}
                                onChange={(value: any) => { setContent(value) }}
                            />
                        </div>}
                    </div>
                    <Keyboard type="price" onKeyClick={(key: any) => upkey(key)} />
                </div>
                <Popup
                    visible={show}
                    width="100%"
                    afterClose={() => console.log('关闭')}
                > <div style={{ height: 255, background: "#fff" }}>
                        <DatePicker
                            visible={true}
                            defaultValue={value1}
                            mode="datetime"
                            min="2007-01-01"
                            max={dayjs(new Date()).format(`YYYY-MM-DD HH:mm:ss`)}
                            value={value1}
                            onOk={(e: any) => {
                                setValue1(e)
                                setShow(false)
                                console.log(value1)
                            }}
                            onCancel={() => { setShow(false) }}
                        />
                    </div></Popup>
            </Popup>
        </div>
    )
}

export default edit
