import React, { Component } from 'react';
import './App.css';
import Layout from './Components/Layouts/Layout';

class App extends Component {
  state = {
    user: {id:0, name:'John Doe',email:'fakeEmail@email.com', phone:'1234567890', pin:1234, pairing:false }
  }

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


