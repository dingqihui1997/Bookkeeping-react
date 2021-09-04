import React from 'react'
import { NavBar, Icon } from 'zarm';
import styles from '../../App.module.scss'
import CcUpload from '../../components/cc-upload/cc-upload';
const User = () => {
    let headers = {
        Authorization: localStorage.getItem('token')
    }
    let uploadSuccess = (res: any) => {
        console.log(res)
    }
    let uploadFail = (err: any) => {
        console.log(err)
    }
    return (
        <div>
            <div style={{ borderBottom: "1px solid #eeeeee" }}><NavBar
                left={<Icon type="arrow-left" theme="primary" onClick={() => window.history.back()} />}
                title="用户信息"
            /></div>
            <div className={`${styles.user} font20 flex-a borderbo font-w7`}>个人资料</div>
            <div className="mat20 mal10">头像</div>
            <div className="flex-a">
                <div className={`${styles.avatarimg1} mal10 mat20`}><img src="" alt="" />99</div>
                <div className="mal20">
                    <div className="font12">支持jpg. png. jpeg格式大小200KB以内的图片
                    </div>
                    <div className='mat10'>
                        <CcUpload action='http://api.chennick.wang/api/upload'
                            headers={headers}
                            uploadSuccess={uploadSuccess}
                            uploadFail={uploadFail}> <button>上传图片</button></CcUpload>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default User
