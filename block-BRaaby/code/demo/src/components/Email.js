import React from "react";

class Email extends React.Component{
  constructor(props){
      super(props);
  }
  render(){
      return(
          <>
            <p>My email is</p>
           <h1>{this.props.randomUser[0] ? this.props.randomUser[0].email : 'Fetching...'}</h1>
          </>
      );
  }
}
export default Email;