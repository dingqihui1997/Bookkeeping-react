import React from 'react'
import { NavBar, Icon, } from 'zarm';
import styles from '../../App.module.scss'

const HboutUs = () => {
    return (
        <div style={{ paddingLeft: 20, paddingRight: 20 }}>
            <NavBar
                left={<Icon type="arrow-left" theme="primary" onClick={() => window.history.back()} />}
                title="关于我们"
            />
            <div>
                <div className={`${styles.title} font18 font-w7`}>关于项目</div>
                <div className="font14">这个项目的初衷，是想让从事前端开发的同学,进入全栈开发
                    的领域。当然，不能说学完本教程你就能胜任任何全栈开发。
                    但至少，你已经可以从设计数据库表开始，把自己的一个想法
                    转化成实际可见的项目。</div>
                <div className={`${styles.title} font18 font-w7`}>关于作者</div>
                <div className="font14">从2015年实习开始至今，有6年前端开发经验。虽然没有在大
                    厂呆过，但是正因如此，我深知奋战在中小厂的前端开发在从
                    业1到3年后，会遇到什么瓶颈，小册中也详细的描述了怎样
                    从初级到中级的进阶之路。</div>
                <div className={`${styles.title} font18 font-w7`}>关于小册</div>
                <div className="font14">这是一本全栈小册，服务端采用Node.上层架构Eggjs，前端采
                    用React框架+ Zarm移动端组件库。本小册致力于让同学们学
                    会服务端的开发流程，从设计数据库到接口的编写，前端的接
                    口数据对接和页面制作，再到线上环境的部署。由于本人用的
                    是Mac,为了照顾到Windows系统的同学，全程关键步骤都会
                    有Windows部分的讲解。</div>

            </div>

        </div>
    )
}

export default HboutUs
