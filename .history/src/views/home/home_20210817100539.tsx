import React from 'react'
import { Icon, TabBar, Cell, Button } from 'zarm';
const TabIcon = Icon.createFromIconfont('//at.alicdn.com/t/font_1340918_lpsswvb7yv.js');
const Home = () => {
    return (
        <div>
            <TabBar visible={visible} activeKey={activeKey} onChange={setActiveKey}>
                <TabBar.Item itemKey="home" title="主页" icon={<TabIcon type="home" />} />
                <TabBar.Item
                    itemKey="found"
                    title="保险"
                    icon={<TabIcon type="insurance" />}
                    badge={{ shape: 'circle', text: '3' }}
                />
                <TabBar.Item
                    itemKey="me"
                    title="我的"
                    icon={<TabIcon type="user" />}
                    badge={{ shape: 'dot' }}
                />
            </TabBar>
        </div>
    )
}

export default Home
