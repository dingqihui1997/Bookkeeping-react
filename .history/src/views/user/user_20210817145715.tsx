import React, { useState } from 'react'
import { NavBar, Icon, Button, Input } from 'zarm';
import styles from '../../App.module.scss'
import CcUpload from '../../components/cc-upload/cc-upload';
import api from '../../http/api'

const User = () => {
    let User = JSON.parse(localStorage.getItem('user')!)
    const [title, setTitle] = useState('');//input
    let [url, setUrl] = useState<string>('')
    let headers = {
        Authorization: localStorage.getItem('token')
    }
    let uploadSuccess = (res: any) => {
        setUrl(`http://api.chennick.wang${res.data}`)
        localStorage.setItem('touxiang', url)
        console.log(url)
    }
    let uploadFail = (err: any) => {//上传成功
        console.log(err)
    }
    let Submit = () => {
        // api.edit_signature({signature})
    }
    // let signature = (e: any) => {
    //     console.log(e)

    // }
    return (
        <div>
            <div style={{ borderBottom: "1px solid #eeeeee" }}><NavBar
                left={<Icon type="arrow-left" theme="primary" onClick={() => window.history.back()} />}
                title="用户信息"
            /></div>
            <div className={`${styles.user} font20 flex-a borderbo font-w7`}>个人资料</div>
            <div className="mat20 mal10">头像</div>
            <div className="flex-a borderbo pab10">
                <div className={`${styles.avatarimg1} mal10 mat20`}><img src={User.avatar} className="img100" /></div>
                <div className="mal20">
                    <div className="font12">支持jpg. png. jpeg格式大小200KB以内的图片
                    </div>
                    <div className='mat10'>
                        <CcUpload action='http://api.chennick.wang/api/upload'
                            headers={headers}
                            uploadSuccess={uploadSuccess}
                            uploadFail={uploadFail}>
                            <Button theme="primary" size="xs">点击上传</Button>
                        </CcUpload>
                    </div>
                </div>
            </div>
            <div className="mat20 mal10"> 个性签名</div>
            <div className="mal10 mat10 borderbo pab10">
                <Input
                    clearable
                    type="text"
                    placeholder="请输入个性签名"
                    value={title}
                    onChange={(value: any) => {
                        // setUser(

                        // );
                        // console.log(`${User}`);
                    }}
                />
            </div>
            <div className="mart20 mal10 marr20">
                <Button block theme="primary" onClick={Submit}>
                    提交
                </Button>
            </div>

        </div>
    )
}

export default User
