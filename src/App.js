import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import { Layout } from 'antd';
import Header from './components/misc/Header';
import Register from './components/authentication/Register';
import PrivateRoute from './guards/PrivateRoute';
import Login from './components/authentication/Login';
import ReviewsList from './components/reviews/ReviewsList';
import ReviewsPost from './components/reviews/ReviewsPost';
import BreadCrumb from './components/misc/BreadCrumb';
import Profile from './components/authentication/Profile';

const {  Content } = Layout;


class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout className="layout">
        <Content style={{display:'block',clear:"both"}}>
            <BreadCrumb />
            <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
            <Switch>
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <PrivateRoute exact path="/user/:id" component={Profile} />
              <PrivateRoute exact path="/reviews" component={ReviewsList} />
              <PrivateRoute exact path="/post" component={ReviewsPost} />
            </Switch>
            </div>
        </Content>
        <Header style={{clear:'both'}}/>
        </Layout>
      </div>
    );
  }
}

export default App;
