import React, { useState } from 'react'
import { NavBar, Icon, Button, Input, Toast, Cell } from 'zarm';

const Reset = () => {
    const [title, setTitle] = useState('');
    let Submit = () => {

    }
    return (
        <div>
            <NavBar
                left={<Icon type="arrow-left" theme="primary" onClick={() => window.history.back()} />}
                title="重置密码"
            />
            <Cell title="原密码">
                <Input
                    clearable
                    type="text"
                    placeholder="请输入"
                    value={title}
                    onChange={(value: any) => {
                        setTitle(value);
                        console.log(`onChange: ${value}`);
                    }}
                />
            </Cell>
            <Cell title="新密码">
                <Input
                    clearable
                    type="text"
                    placeholder="请输入"
                    value={title}
                    onChange={(value: any) => {
                        setTitle(value);
                        console.log(`onChange: ${value}`);
                    }}
                />
            </Cell>
            <Cell title="确认密码">
                <Input
                    clearable
                    type="text"
                    placeholder="请输入"
                    value={title}
                    onChange={(value: any) => {
                        setTitle(value);
                        console.log(`onChange: ${value}`);
                    }}
                />
            </Cell>
            <div className="mart20 mal10 marr20 mat20">
                <Button block theme="primary" onClick={Submit}>
                    提交
                </Button>
            </div>
        </div>
    )
}

export default Reset
