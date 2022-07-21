import React from "react";

class Name extends React.Component{
  constructor(props){
      super(props);
  }
  render(){
      return(
          <>
            <p>My name is</p>
              <h1>{this.props.randomUser[0] ? `${this.props.randomUser[0].name.first} ${this.props.randomUser[0].name.last}` : 'Fetching...'}</h1>
          </>
      );
  }
}

export default Name;
