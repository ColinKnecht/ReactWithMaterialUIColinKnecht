import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './Components/Layouts/Layout';
import Header from './Components/Layouts/Header';
import Body from './Components/Layouts/Body';
import Footer from './Components/Layouts/Footer';

class App extends Component {
  state = {
    user: {id:0, name:'John Doe',email:'fakeEmail@email.com', phone:'1234567890', pin:1234, pairing:false }
  }
  //use this.setState({}); to change this state

  // getRequestData() {
  //   fetch('http://projects.codeandtrust.com/api/user/105')
  //   .then(response => response.json())
  //   .then(state => this.setState({ state: state.total }));
  //   console.log(state);
  // }

  render() {
    console.log(this.state);
    // this.getRequestData();
    return (
      <div className="App">
        <Layout />
        {/* <Header user={this.state.user} />
        <Body user={this.state.user} />
        <Footer user={this.state.user} /> */}
      </div>
    );

  }
}

export default App;


