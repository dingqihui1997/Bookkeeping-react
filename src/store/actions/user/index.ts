import api from "../../../http/api"

export const getTopics = () => {
  return (dispatch: any) => {
    // 发请求
    api.getTopics().then((res: any) => {
      // 触发reducer的方法
      dispatch({
        type: 'getTopics',
        data: res.data.data
      })

    }).catch((err: any) => {
      console.log(err)
    })
  }
}