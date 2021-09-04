// 配置两种路由 一种是不需要权限的 一种是需要权限的
import Login from '../views/login/login'
import Home from '../views/home/home';
import My from './../views/my/my';
import Statistics from './../views/statistics/statistics';
import User from './../views/user/user';
import Reset from '../views/reset/reset';
import aboutUs from '../views/aboutUs/aboutUs';



export interface Meta {
  title: string,
  icon?: string
}

export interface RouterItem {
  path: string,
  component: any,
  // 精准匹配 只有路径完全相同的时候才匹配
  exact: boolean,
  meta?: Meta
}


export const commonRoutes: RouterItem[] = [
  {
    path: '/login',
    component: Login,
    exact: true,
    meta: {
      title: '登录'
    }
  }
]

export const routes: RouterItem[] = [
  {
    path: '/',
    component: Home,
    exact: true,
    meta: {
      title: '首页'
    }
  },
  {
    path: '/statistics',
    component: Statistics,
    exact: true,
    meta: {
      title: '统计'
    }
  },
  {
    path: '/my',
    component: My,
    exact: true,
    meta: {
      title: '我的'
    }
  },
  {
    path: '/user',
    component: User,
    exact: true,
    meta: {
      title: '修改用户信息'
    }
  },
  {
    path: '/reset',
    component: Reset,
    exact: true,
    meta: {
      title: '重置密码'
    }
  },
  {
    path: '/aboutUs',
    component: aboutUs,
    exact: true,
    meta: {
      title: '关于我们'
    }
  },

]




