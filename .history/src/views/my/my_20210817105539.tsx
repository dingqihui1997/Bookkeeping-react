import React, { useEffect } from 'react'
import styles from '../../App.module.scss'
import Tabbar from "../../components/tabbar/tabbar";
import api from '../../http/api';
const My = () => {

    return (
        <div>
            <div className={`${styles.myimg}`}>888</div>
            <Tabbar></Tabbar>
        </div>
    )
}

export default My
