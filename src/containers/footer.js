import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
class Footer extends Component {
  
  render() {
    return (
      <div>
        <footer>
            <div className="info">
                <span className="align-right" >当前选中{this.props.checkLength}首歌</span>
                <span>共{this.props.listLength}首歌曲</span>
            </div>
            <div className="btns">
                <button onClick={this.props.removeSelect} style={{display: this.props.checkLength? 'inline-block' : 'none'}}>删除选中</button>
                <button onClick={this.props.collectSelect}>收藏选中</button>
                <Link to="/like" style={ {display: this.props.pathname !=="/like" && this.props.likeLength > 0 ? 'inline-block' : 'none'} }>显示收藏</Link>
                <Link to="/" style={ {display: this.props.pathname ==="/like" ? 'inline-block' : 'none'} }>显示全部</Link>
            </div> 
        </footer>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    listLength: state.length,
    checkLength: state.filter( item => item.isChecked).length || 0,
    likeLength: state.filter(item => item.isCollect).length
  }
}
const mapDispatchToProps = dispatch => {
  return {
    removeSelect: () => {
      dispatch({type: 'REMOVE_SELECTED'})
    },
    collectSelect: () => {
      dispatch({type: 'COLLECT_SELECTED'})
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Footer)