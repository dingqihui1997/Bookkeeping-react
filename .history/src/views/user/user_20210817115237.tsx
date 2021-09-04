import React from 'react'
import { NavBar, Icon } from 'zarm';

const User = () => {
    return (
        <div>
            <NavBar
                left={<Icon type="arrow-left" theme="primary" onClick={() => window.history.back()} />}
                title="这是标题"
            />,
        </div>
    )
}

export default User
