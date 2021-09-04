import React from 'react'
import { NavBar, Icon } from 'zarm';

const User = () => {
    return (
        <div>
            <div></div>
            <NavBar
                left={<Icon type="arrow-left" theme="primary" onClick={() => window.history.back()} />}
                title="用户信息"
            />,
        </div>
    )
}

export default User
