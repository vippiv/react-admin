import React from 'react'
import { Layout } from 'antd'
const Foot = Layout.Footer

const footerStyle = {
    textAlign: 'center',
    padding: '10px 200px 10px 0',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    zIndex: 100,
    boxSizing: 'border-box'
}

const Footer = () => {
    return (
        <Foot stype={footerStyle}>开发：zwl 邮箱：470211273@qq.com</Foot>
    )
}

export default Footer
