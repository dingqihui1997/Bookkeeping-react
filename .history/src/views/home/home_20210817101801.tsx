import React, { useState } from 'react'
import { Icon, TabBar, Cell, Button } from 'zarm';
const TabIcon = Icon.createFromIconfont('//at.alicdn.com/t/font_2749386_njyku0xb1zb.js');
const Home = () => {
    const [activeKey, setActiveKey] = useState('home');
    return (
        <div>
            <TabBar activeKey={activeKey} onChange={setActiveKey}>
                <TabBar.Item
                    itemKey="/"
                    title="账单"
                    icon={<TabIcon type="icon-shu" />}
                />
                <TabBar.Item
                    itemKey="/statistics"
                    title="统计"
                    icon={<TabIcon type="icon-icon--tongji" />}
                />
                <TabBar.Item
                    itemKey="my"
                    title="我的"
                    icon={<TabIcon type="icon-wode" />}
                />
            </TabBar>

        </div>
    )

}
export default Home
