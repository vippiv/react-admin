import apis from '../../apis'
import fetch from '@/utils/request'

const LogoutActionType = 'views/logout_INIT_ACTION_TYPE'

export const logoutThunk = arg => async dispatch => {
    return await fetch(apis.logout, arg, 'post')
}

export const updatePasswordThunk = arg => async dispatch => {
    return await fetch(apis.update)
}

const inititalState = {}

export const homeReducer = function (state = inititalState, action) {
    switch (action.type) {
        case LogoutActionType:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}
