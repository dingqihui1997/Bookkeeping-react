import React, { useState } from 'react'
import { NavBar, Icon, Button, Input, Toast, Cell } from 'zarm';

const Reset = () => {
    const [title, setTitle] = useState('');
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
        </div>
    )
}

export default Reset
