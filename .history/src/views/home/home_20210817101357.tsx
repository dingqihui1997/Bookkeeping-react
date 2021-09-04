import React, { useState } from 'react'
import { Icon, TabBar, Cell, Button } from 'zarm';
const TabIcon = Icon.createFromIconfont('//at.alicdn.com/t/font_2749386_njyku0xb1zb.js');
const Home = () => {
    const Demo = () => {
        const [activeKey, setActiveKey] = useState('home');
        const [visible, setVisible] = useState(true);
        let onClick = () => {
            setVisible(!visible);
        }
        return (
            <div>
                <TabBar visible={visible} activeKey={activeKey} >
                    <TabBar.Item itemKey="home" title="主页" icon={<TabIcon type="home" />} />
                    <TabBar.Item
                        itemKey="/"
                        title="账单"
                        icon={<TabIcon type="insurance" />}
                    />
                    <TabBar.Item
                        itemKey="/statistics"
                        title="统计"
                        icon={<TabIcon type="user" />}
                    />
                    <TabBar.Item
                        itemKey="my"
                        title="我的"
                        icon={<TabIcon type="user" />}
                    />
                </TabBar>

            </div>
        )
    }
}
export default Home
