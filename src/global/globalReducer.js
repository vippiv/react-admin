const globalActionType = 'GLOBAL_ACTION_TYPE'

const SAVE_USER_NAME = 'SAVE_USER_NAME'

export const globalAction = payload => {
    return {
        type: globalActionType,
        payload
    }
}

export const saveUserName = payload => {
    return {
        type: SAVE_USER_NAME,
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
        case SAVE_USER_NAME:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}