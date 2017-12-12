import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import './App.css';

class App extends Component {
  state = {
    loggedIn: false
  };

  toggleLoggedIn = () => {
    this.setState({
      loggedIn: !this.state.loggedIn
    });
  };
  render() {
    return (
      <Router>
        <div className="App">
          <p>Welcome to my website</p>
          <hr />
          <button
            className={this.state.loggedIn ? 'loggedIn' : ''}
            onClick={this.toggleLoggedIn}
          >
            {this.state.loggedIn ? 'Log out' : 'Log in'}
          </button>
          <p>{this.state.loggedIn && 'You are logged in!'}</p>
          <strong>Navigation:</strong>
          <Link to="/">Home</Link> |
          <Link to="/hello">Hello</Link> |
          <Link to="/hello/you">HelloYou</Link> |
          <Link to="/goodbye">Goodbye</Link> |
          <Link to="/contact">Contact</Link> |
          <hr />
          <Route exact path="/hello" component={Hello} />
          <Route path="/hello/:name" component={HelloYou} />
          <Route path="/goodbye" component={Goodbye} />
          <Route
            path="/contact"
            component={() => {
              if (this.state.loggedIn) {
                return <Contact />;
              } else {
                return <Redirect to="/login" />;
              }
            }}
          />
          <Route path="/login" component={Login} />
        </div>
      </Router>
    );
  }
}
const Login = () => <p> Tech debt: login form goes here!</p>;

const Hello = () => <p> Hello World!</p>;
const HelloYou = props => <p> Hello {props.match.params.name}!</p>;

const Goodbye = () => <p> Goodbye World!</p>;

const Contact = () => <p> Fortitude Valley Station</p>;
export default App;
