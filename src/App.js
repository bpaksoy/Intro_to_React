import React, { Component } from 'react';
import './App.css';

class App extends Component {
constructor(){
  super();
  this.state = {
    name: "",
    listOfNames: []
  }
}
handleChange(event){
  const name = event.target.value;
  this.setState({
    name
  })
  // console.log("this is the name in the handleChange: ", this.state.name )
}

clearName(i, event){
  // console.log("i is ", i)
  const index = i;
  const listOfNames = this.state.listOfNames;
  const updatedListOfNames = listOfNames.filter((item, i , array) => {
    return item !== array[index];
  })

  this.setState({
    listOfNames: updatedListOfNames
  })

}

starName(i, event){
 const updatedListOfNames = this.state.listOfNames;
 updatedListOfNames[i].isStarred = !updatedListOfNames[i].isStarred
  this.setState({
   listOfNames : updatedListOfNames
  })

}

handleSubmit(event){
  event.preventDefault();
  const name = this.state.name;

  let updatedListOfNames = this.state.listOfNames;
  updatedListOfNames.push({ name, isStarred: false});

  this.setState({
    listOfNames: updatedListOfNames
  })
  let text = this.refs.text;
  text.value = "";
  console.log("this new list of names: ", this.state.listOfNames)
}


  render() {
    const listOfNames = this.state.listOfNames;

    const name = listOfNames.map((list, i) => (<li key={i}><i className={(list.isStarred)? "fas fa-star": "far fa-star"} onClick={this.starName.bind(this, i)}></i><span> </span>{list.name}<span> </span><i onClick={this.clearName.bind(this, i)} className="fas fa-window-close" ></i></li>));


    console.log("starred status:", this.state.listOfStars)

    return (
      <div className="App">
        <p className="App-intro">
        Welcome to my React App!
        </p>
       <form onSubmit={this.handleSubmit.bind(this)}>
        <label>
          Name: <br/>
        <input onChange={this.handleChange.bind(this)} type="text" name="name" ref="text"/>
        </label>
        <input type="submit" value="Submit" />
       </form>
       <ul>
        { (name) ? name   : null }
       </ul>
      </div>
    );
  }
}

export default App;
