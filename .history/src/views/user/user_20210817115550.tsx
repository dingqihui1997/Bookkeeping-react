import React from 'react'
import { NavBar, Icon } from 'zarm';

const User = () => {
    return (
        <div>
            <div style={{ borderBottom: "1px solid #eeeeee" }}><NavBar
                left={<Icon type="arrow-left" theme="primary" onClick={() => window.history.back()} />}
                title="用户信息"
            /></div>
            <div>个人资料</div>
        </div>
    )
}

export default User
