import React, { Component } from 'react'
import MList from '../components/mList'
import {connect} from 'react-redux'
class Main extends Component {
    
    render() {
        
        return (
        <div className="main">
            
            <table cellSpacing="0">
                <thead>
                    <tr className="tr-top">
                        <th>全选<input type="checkbox"
                        checked={this.props.isCheckAll()}
                        onChange={e => {
                            this.props.checkAll(e.target.checked)
                        }}/></th>
                        <th>歌曲</th>
                        <th>歌手</th>
                        <th>收藏</th>
                        <th>删除</th>
                    </tr>
                </thead>
                <MList {...this.props} 
                 ></MList>
            </table>
        </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    let pathname = ownProps.location.pathname
    let list = state
    if(pathname === '/like') {
        list = list.filter(item => item.isCollect)
    }
    return {
        isCheckAll: () => {
            for(var i=0; i<state.length; i++) {
                if(!state[i].isChecked) {
                    return false
                }
            }
            return true
        },
        list: list
    }
}
const mapDispatchToProps = dispatch => {
    return {
        checkAll: checked => {
            dispatch({type: 'CHECK_ALL', checked})
        },
        remove: id => dispatch({type:'REMOVE', id: id}),
        setCollect: (id, checked) => dispatch({type: 'COLLECT', id: id, checked: checked}),
        setChecked: (id, checked) => dispatch({type: 'CHECK', id: id, checked: checked})
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Main)
