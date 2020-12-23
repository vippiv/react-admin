const globalActionType = 'GLOBAL_ACTION_TYPE'

export const globalAction = payload => {
    return {
        type: globalActionType,
        payload
    }
}

const initialState = {
    isAuth: false,
    userName: "",
    token: '',
    clientHeight: 0,
    siderMenuList: [],
    selectedKeys: []
}

export const globalReducer = function (state = initialState, action) {
    switch (action.type) {
        case globalActionType:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}