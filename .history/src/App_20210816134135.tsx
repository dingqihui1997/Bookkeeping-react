import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { commonRoutes, routes, RouterItem } from './router'

const App = () => {
  return (
    <Router>
      <Switch>
        {
          commonRoutes.map((item: RouterItem, index: number) => {
            return (
              <Route key={index} path={item.path} exact={item.exact} render={() => {
                // 路由守卫的代码
                document.title = item.meta!.title
                return (
                  <item.component />
                )
              }} />
            )
          })
        }
        {
          routes.map((item: RouterItem, index: number) => {
            return (
              <Route key={index} path={item.path} exact={item.exact} render={() => {
                // 路由守卫的代码
                document.title = item.meta!.title
                let token = localStorage.getItem('token')
                if (!token) {
                  return (
                    <Redirect to='/login' />
                  )
                }
                return (
                  <item.component />
                )
              }} />
            )
          })
        }
      </Switch>
    </Router>
  )
}

export default App


// import React, { useState } from 'react'
// import styles from  './App.module.scss'

// // jsx语法 facebook
// // 在html代码里面写js/ts
// // react hooks: 官方提供了一些hooks函数
// // hooks都是以use开头的
// // useState: 定义数据的

// interface ArrItem {
//   name: string,
//   age: number
// }


// const App = () => {
//   //  数组第一项是数据名 第二项是函数 用来修改数据
//   let [num, setNum] = useState<number>(10)
//   let [name, setName] = useState<string>('jack')
//   let [color, setColor] = useState<string>('blue')
//   let [arr, setArr] = useState<ArrItem[]>([
//     {
//       name: 'jack',
//       age: 20
//     },
//     {
//       name: 'tom',
//       age: 18
//     }
//   ])

//   let handleClick = () => {
//     setNum(100)
//     setName('tom')
//   }
//   let clickItem = (item: ArrItem, index: number) => {
//     console.log(item)
//     console.log(index)
//   }
//   return (
//     <div className={`${styles.box}  ${num <= 10 ? styles.color : ''} `} style={{color: color}}>
//       123
//       {/* <div onClick={handleClick}>
//         {num} --- {name}
//       </div> */}
//       {/* <div>
//         {
//           arr.map((item: ArrItem, index: number) => {
//             return (
//               <div key={index} onClick={() => clickItem(item, index)}>
//                 {item.name} --- {item.age}
//               </div>
//             )
//           })
//         }
//       </div> */}
//       {/* {
//         num > 10 ? <div>大于10</div> : <div>小于等于10</div>
//       } */}
//     </div>
//   )
// }


// export default App