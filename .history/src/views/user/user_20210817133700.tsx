import React from 'react'
import { NavBar, Icon } from 'zarm';
import styles from '../../App.module.scss'
const User = () => {
    return (
        <div>
            <div style={{ borderBottom: "1px solid #eeeeee" }}><NavBar
                left={<Icon type="arrow-left" theme="primary" onClick={() => window.history.back()} />}
                title="用户信息"
            /></div>
            <div className={`${styles.user} font20 flex-a borderbo font-w7`}>个人资料</div>
            <div className="mat20 mal10">头像</div>
        </div>
    )
}

export default User
