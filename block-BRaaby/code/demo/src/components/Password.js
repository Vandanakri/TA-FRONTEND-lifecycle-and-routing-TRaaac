import React from "react";

class Password extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <>
              <p>My password is</p>
                <h1>{this.props.randomUser[0] ? this.props.randomUser[0].login.password : 'Fetching...'}</h1>
            </>
        );
    }
}

export default Password;