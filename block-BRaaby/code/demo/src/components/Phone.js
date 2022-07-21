import React from "react";

class Phone extends React.Component{
  constructor(props){
      super(props);
  }
  render(){
      return(
          <>
            <p>My phone is</p>
              <h1>{this.props.randomUser[0] ? this.props.randomUser[0].phone : 'Fetching...'}</h1>
          </>
      );
  }
}

export default Phone;