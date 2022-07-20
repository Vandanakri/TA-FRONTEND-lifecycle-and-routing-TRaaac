import React from "react";

class Age extends React.Component{
  constructor(props){
      super(props);
  }
  render(){
      return(
          <>
            <p>My age is</p>
              <h1>{this.props.randomUser[0] ? this.props.randomUser[0].dob.age : 'Fetching...'}</h1>
          </>
      );
  }
}

export default Age;