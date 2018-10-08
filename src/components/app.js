import React, { Component } from 'react';
import ComponentList from './ComponentList';
import ComponentPost from './ComponentPost';
import {Route, BrowserRouter, Switch, Link} from 'react-router-dom';
import { connect } from 'react-redux';
import authActionCreator from '../actions/index';
import { bindActionCreators } from 'redux';
 class App extends Component {

renderButton() {
  const {auth} = this.props;
  if(auth) {
    return <button type="submit" onClick={() => this.handleButtonClick(false)}>Sign Out</button>;
  }
  return <button type="submit" onClick={() => this.handleButtonClick(true)}>Sign In</button>;
}

handleButtonClick = (value) => {
  this.props.authActionCreator(value);
}


  renderHeader = () => {
    return (
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/post">Post a comment</Link>
        </li>
        <li>
          {this.renderButton()}
        </li>
      </ul>
    )
  }


  render() {
    return (
      <div>
        <BrowserRouter>
            <div>
             { this.renderHeader()}
            <Route path="/post" component={ComponentPost} />
            <Route path="/" exact component={ComponentList} />
            </div>
        </BrowserRouter>
      </div>
    );
  }
}

function mapStateToProps({auth}) {
  return {auth};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({authActionCreator}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);