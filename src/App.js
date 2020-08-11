import React, { Component } from 'react';
import fire from './fire';
import Home from './container/home';
import Login from './container/login';


class App extends Component{
  constructor(props){
    super(props);
    this.state={
      user:{}
    }
  }

  componentWillMount(){
    if(localStorage.getItem('isAuth')!==null){
      
       if(localStorage.getItem('content')===false){
        alert('Your study material will be available shortly. Stay tuned for updates from us.')
        this.props.history.push('/account')
      }else{
        this.props.history.push('/home')
      }
      
    }else{
      this.props.history.push('/login')
    }
  }

  render(){
    return(
      <>
        
      </>
    )
  }
}

export default App;
