import React, { Component } from 'react'
import { Button } from 'antd'

class InjectScript extends Component {

    handleInjectScript = () => {
        const divEle = document.createElement('div')
        const ele = document.createElement('script')
        ele.id = 'scriptContent'
        ele.type = "text/javascript";
        ele.innerHTML = "alert('1111')\nconsole.log('123')\nalert('hello')"
        divEle.appendChild(ele)
        document.body.append(divEle)
    }

    render () {
        return (
            <>
                <div id="content">injectScriptddfsa</div>
                <Button type='primary' onClick={() => this.handleInjectScript()}>注入脚本</Button>
            </>
        )
    }
}

export default InjectScript