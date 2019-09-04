import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import axios from 'axios';
import "semantic-ui-css/semantic.min.css"
import { Card, Icon, Image } from 'semantic-ui-react'


class App extends React.Component {
  state = {
    users:{},
    followers: [],
  };

  componentDidMount() {
    axios
      .get('https://api.github.com/users/samir-hub')
      // .then(res => console.log(res.data))
      .then(res => this.setState({users: res.data }))
      .catch(err => console.log('noooo'));
    axios
      .get('https://api.github.com/users/samir-hub/followers')
      // .then(res => console.log(res.data))
      .then(res => this.setState({followers: res.data }))
      .catch(err => console.log('noooo'));  
  }
  

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.doggos !== prevState.doggos) {
  //     if (this.state.doggoText === 'chihuahua') {
  //       fetch('https://dog.ceo/api/breed/husky/images')
  //         .then(res => res.json())
  //         .then(res => this.setState({ doggos: res.message }))
  //         .catch(err => console.log('noooo'));
  //     }
  //   }
  // }

  // handleChange = e => {
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   });
  // };

  // fetchDoggos = e => {
  //   e.preventDefault();
  //   fetch(`https://dog.ceo/api/breed/${this.state.doggoText}/images`)
  //     .then(res => res.json())
  //     .then(res => this.setState({ doggos: res.message }))
  //     .catch(err => console.log('noooo'));
  // };

  render() {
    return (
      <>
      <h1>My GitHub</h1>
     
      <div className="App">
        <Card>
          <Image src={this.state.users.avatar_url} alt={this.state.users.name} />
          <Card.Content>
          <Card.Header>{this.state.users.name}</Card.Header>
          <Card.Description>
          {this.state.users.bio}
          </Card.Description>
          <Card.Description>
          {this.state.users.location}
          </Card.Description>
          <Card.Description>
          Followers: {this.state.users.followers}
        </Card.Description>
        <Card.Description>
          Following: {this.state.users.following}
        </Card.Description>
        </Card.Content>
      </Card>
      <h1>My Followers:</h1>

        {this.state.followers.map(follower => (
          <Card>
            <Image src={follower.avatar_url} alt={follower.login}/>
          <Card.Content>
          
          <Card.Header>{follower.login}</Card.Header>
          <Card.Description>GitHub Profile: {follower.url}</Card.Description>
          </Card.Content>
          </Card>
          ))}

      </div>
      </>
    );
  }
}

export default App;
