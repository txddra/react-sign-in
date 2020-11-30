import React, { Component } from 'react'
import Todo from "./components/Todo/Todo"

export class App extends Component {

  state ={
    isAuth : false,
    email:"",
    password:"",
  };

handleOnChange=(event)=>{
  this.setState({
  [event.target.name]:event.target.value
})
}


handleOnSubmit =(event)=>{
  event.preventDefault();


}


  render() {
    const {isAuth} =this.state;

    let showComponent = isAuth ? (<Todo />) :(

      <form onSubmit ={this.handleOnSubmit}>
      {" "}
    <input type="text" placeholder="enter email" name="email" onChange ={this.handleOnchange}/> 
    <br />{" "}

    <input type = "text" placeholder="enter Password" onChange ={this.handleOnchange}/>
    <br />
    {" "}
    <button>Sign Up</button>
    </form>
      );
    return <div style={{textAlign:"center", marginTop:"15%"}}>
        {showComponent}
      </div>
    
  }
}

export default App
