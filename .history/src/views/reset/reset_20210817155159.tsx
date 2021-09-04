import React, { useState } from 'react'
import { NavBar, Icon, Button, Input, Toast, Cell } from 'zarm';

const Reset = () => {
    const [title, setTitle] = useState('');//原密码
    const [password, setPassword] = useState('');//原密码
    const [agin, setAgin] = useState('');//确认密码
    let Submit = () => {
        console.log(title, password, agin)
        if (!title) {
            Toast.show('请输入原密码')
        } else if (!password) {
            Toast.show('请输入新密码')
        } else if (!agin) {
            Toast.show('请确认密码')
        }
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
                    }}
                />
            </Cell>
            <Cell title="新密码">
                <Input
                    clearable
                    type="text"
                    placeholder="请输入"
                    value={password}
                    onChange={(value: any) => {
                        setPassword(value);
                    }}
                />
            </Cell>
            <Cell title="确认密码">
                <Input
                    clearable
                    type="text"
                    placeholder="请输入"
                    value={agin}
                    onChange={(value: any) => {
                        setAgin(value);
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
