import React, { Component } from 'react';
import Add from './containers/add'
import Home from './containers/home'
import {HashRouter, BrowserRouter, Route, Switch} from 'react-router-dom'
class App extends Component {
  componentDidMount() {
  }
  shouldComponentUpdate(nextProps, nextState) {
    if(nextState.showType) {
      let likeData = nextState.list.filter(item => item.isCollect)
      if(likeData.length === 0) {
        this.setState({
          showType: false
        })
      }
    }
    return true
  }
  add(item) {
    let list = this.state.list.slice()
    list.push({...item, isCollect: false, isChecked: false, id: ++this.nextId})
    
    this.setState({
      list
    })
  }
  isCheckAll() {
    let list = this.state.list.slice()
    let isCheckAll = true
    list.forEach(item => {
      
      if(!item.isChecked) {
        isCheckAll = false
        return
      }
    })
    return isCheckAll
  }
  checkAll(checked, checkType) {
    let list = this.state.list.slice()
    
    list = list.map(t => {
      if(checkType === true ){
        if(t.isCollect === true){
          t.isChecked = checked
        }
      }else{
        t.isChecked = checked
      }
      return t
    })
    this.setState({
      list
    })
  }
  setChecked(checked, index) {
    let list = this.state.list.slice()
    for(let item of list) {
      if(item.id === index) {
        item.isChecked = checked
      }
    }
    this.setState({
      list
    })
  }
  setCollect(collected, index) {
    let list = this.state.list.slice()
    for(let item of list) {
      if(item.id === index) {
        item.isCollect = collected
      }
    }
    this.setState({
      list
    })
  }
  remove(index) {
    let list = this.state.list.slice()
    
    let nextList = list.filter(item => item.id !== index)
    this.setState({
      list: nextList
    })
  }
  removeSelect() {
    let list = this.state.list.slice()
    let nextList = list.filter(item => !item.isChecked)
    this.setState({
      list: nextList
    })
  }
  collectSelect() {
    let list = this.state.list.slice()
    list.forEach(item => item.isChecked ? item.isCollect = true : '')
    
    this.setState({
      list
    })
  }
  changeShowType(state) {
    this.setState({
      showType: state
    })
  }
  
  
  render() {
    
    return (
      
      <div className="App">
        <HashRouter>
          <Switch>
            <Route path="/add" render={router => {
              return <Add {...this.props} router={router}></Add>
            }}/>

            <Route path="/" component={Home}/>
            />
          </Switch>
          
        </HashRouter>
      </div>
    );
  }
}
export default App;
