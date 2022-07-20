import React from "react";

class Address extends React.Component{
  constructor(props){
      super(props);
  }
  render(){
      return(
          <>
            <p>My address is</p>
              <h1>{this.props.randomUser[0] ? ` ${this.props.randomUser[0].location.street.name} ${this.props.randomUser[0].location.city} ${this.props.randomUser[0].location.state} ${this.props.randomUser[0].location.country}` : 'Fetching...'}</h1>
          </>
      );
  }
}
export default Address;