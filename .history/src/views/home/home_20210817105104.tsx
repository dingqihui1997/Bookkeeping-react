import React, { useState, } from 'react'
// import { Icon, TabBar, Cell, Button } from 'zarm';
import { useHistory } from 'react-router-dom'
import Tabbar from './../../../.history/src/components/tabbar/tabbar_20210817104845';

// const TabIcon = Icon.createFromIconfont('//at.alicdn.com/t/font_2749386_eg7sbpybri6.js');
const Home = () => {
    // const [activeKey, setActiveKey] = useState('/');
    // let history = useHistory()
    // let setActiveKey1 = (e: any) => {
    //     history.push(e)
    //     setActiveKey(e)
    // }
    return (
        <div>
            {/* <TabBar activeKey={activeKey} onChange={setActiveKey1}>
                <TabBar.Item
                    itemKey="/"
                    title="账单"
                    icon={<TabIcon type="icon-zhangdan" />}
                />
                <TabBar.Item
                    itemKey="/statistics"
                    title="统计"
                    icon={<TabIcon type="icon-tongji" />}
                />
                <TabBar.Item
                    itemKey="/my"
                    title="我的"
                    icon={<TabIcon type="icon-wode" />}
                />
            </TabBar> */}
            <Tabbar></Tabbar>
        </div>
    )

}
export default Home
