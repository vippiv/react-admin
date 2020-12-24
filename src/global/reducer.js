import { combineReducers } from 'redux'
import { homeReducer } from '@/views/layout/reducer'
import { globalReducer } from '@/global/globalReducer'

// 主要功能是引入组件

const rootReducer = {

    homeReducer,

    global: globalReducer
    
}

export default combineReducers(rootReducer)