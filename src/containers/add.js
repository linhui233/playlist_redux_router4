import React, { Component } from 'react'
import {connect} from 'react-redux'
class Add extends Component {
    addHandler(name, author) {
        this.props.dispatch({
            type: 'ADD',
            name,
            author
        })
    }
    render() {
    let name
    let author
    return (
        <div className="add">
            <div className="title">
                <h2>添加歌曲</h2>
                {
                    this.props.showBack ? 
                    <button className="backLink" onClick={() => {
                        this.props.router.history.goBack()
                    }}>返回</button>
                    : ''
                }
            </div>
            <div className="header">
                <input ref={node => name = node} className="header-input" type="text" placeholder="请输入歌曲名"/>
                <input ref={node => author = node} className="header-input" type="text" placeholder="请输入歌手"/>
                <button onClick={() => {
                    this.addHandler(name.value, author.value)
                    name.value = ''
                    author.value = ''
                    this.props.router.history.push('/')
                    }}className="add-music">添加音乐</button>
            </div>
        </div>
    )
  }
}
const nextAdd = connect(state => {
    return {
        ...state
    }
})(Add)
export default nextAdd
