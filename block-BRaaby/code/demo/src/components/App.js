import React from "react";
import Name from "./Name"
import Email from "./Email";
import Password from "./Password"
import Phone from "./Phone";
import Age from "./Age";
import Address from "./Address";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      randomUser: [],
      selected: 'name',
    }
  }
  componentDidMount() {
    fetch('https://randomuser.me/api/')
      .then(res => res.json())
      .then(data => {
        this.setState({
          randomUser: this.state.randomUser.concat(data.result[0])
        })
      });
  }

  handleRandomUser = () => {
    fetch('https://randomuser.me/api/')
      .then(res => res.json())
      .then(data => {
        console.log(data.results[0]);
        this.setState({ randomUser: [data.results[0]] })
      });
  }

  handleComponent = (value) => {
    this.setState({
      selected: value,
    });
  }

  handleUI = (value) => {
    switch (value) {
      case 'name':
        return <Name randomUser={this.state.randomUser} />;
      case 'email':
        return <Email randomUser={this.state.randomUser} />
      case 'birth':
        return <Age randomUser={this.state.randomUser} />
      case 'address':
        return <Address randomUser={this.state.randomUser} />
      case 'phone':
        return <Phone randomUser={this.state.randomUser} />
      case 'password':
        return <Password randomUser={this.state.randomUser} />
    }
  }

  render() {
    return (
      <>
        <div className='userbox'>
          <div className='user'>
            <div className='image-container'>
              <img className='full-width' src={this.state.randomUser[0] ? this.state.randomUser[0].picture.medium : 'https://cdn-icons-png.flaticon.com/512/149/149071.png'} />
            </div>
            {this.handleUI(this.state.selected)}
            <div className='options'>
              <i onClick={() => this.handleComponent('name')} className="fas fa-user"></i>
              <i onClick={() => this.handleComponent('email')} className="fas fa-envelope"></i>
              <i onClick={() => this.handleComponent('birth')} className="fas fa-calendar-times"></i>
              <i onClick={() => this.handleComponent('address')} className="fas fa-map"></i>
              <i onClick={() => this.handleComponent('phone')} className="fas fa-phone-square"></i>
              <i onClick={() => this.handleComponent('password')} className="fas fa-lock"></i>
            </div>
            <button onClick={() => this.handleRandomUser()}>RANDOM USER</button>
          </div>
        </div>
        <div className='bottom'></div>
      </>
    );
  }
}

export default App;