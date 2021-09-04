import Tabbar from "../../components/tabbar/tabbar";
import React, { useState, useReducer, useEffect } from 'react'
import styles from '../../App.module.scss'

const Statistics = () => {
    return (
        <div>
            <div className={`${styles.databox}`}>
                <div>2021-08 | </div>
            </div>
            <Tabbar active="/statistics"></Tabbar>
        </div>
    )
}

export default Statistics
