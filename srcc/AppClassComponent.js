import React, { Component } from 'react'

export default class App extends Component {
 state={
   hasError: false,
   users:{}
 }
  componentDidMount(){
      fetch('https://randomuser.me/api/')
      .then(res => res.json())
      .then(res => this.setState({users:res}))
      .catch(()=> this.setState({hasError:true}))
  }

  render() {
    return (
      <div>
          {JSON.stringify(this.state.users)}
      </div>
    )
  }
}
