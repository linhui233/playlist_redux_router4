import React, { Component } from 'react'
import {Link, Route, Switch, Redirect} from 'react-router-dom'
import Main from './main'
import Footer from './footer'
import {connect} from 'react-redux'
class Home extends Component {
 
  render() {
    let collectLength = this.props.list.filter(item => item.isCollect).length
    
    function toRedirect() {
      
        const pathname = this.props.history.location.pathname
        
        if(this.props.list.length === 0) {
            return <Redirect to="./add"></Redirect>
        }else if(pathname !== '/' && this.props.list.length === 0){
            return <Redirect to="/"></Redirect>
        }
    }
    return (
      <div className="home">
        {toRedirect.bind(this)()}
        <header><h2>音乐列表</h2></header>
        <Link to="/add" className="addLink">添加音乐</Link>
        <Switch>
          <Route path="/" exact component={Main}></Route>
          <Route path="/like" render={router => {
            if(collectLength < 1) {
              return <Redirect to="/"></Redirect>
            }
            return <Main location={router.location}></Main>
          }}></Route>
        </Switch>
        <Footer pathname={this.props.location.pathname} ></Footer>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    list: state
  }
}
const outerHome = connect(mapStateToProps)(Home)
export default outerHome
