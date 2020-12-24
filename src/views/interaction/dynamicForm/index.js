import React, { Component } from 'react'
import { Form } from 'antd'
import './index.css'

class DynamicForm extends Component {
    render () {
        return (
            <>
                动态表单
            </>
        )
    }
}

export default Form.create()(DynamicForm)