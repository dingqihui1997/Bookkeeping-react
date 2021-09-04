const initState = {
  topics: [],
  users: []
}

interface Action {
  type: string,
  data: any
}

const userReducers = (state = initState, action: Action) => {
  if (action.type === 'getTopics') {
    return {
      ...state,
      topics: action.data
    }
  }
  if (action.type === 'getUsers') {
    return {
      ...state,
      users: action.data
    }
  }
  if (action.type === 'addUsers') {
    return {
      ...state,
      users: action.data
    }
  }
  if (action.type === 'delUsers') {
    return {
      ...state,
      users: action.data
    }
  }
  return {
    ...state
  }
}

export default userReducers