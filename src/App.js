import React, { Component } from 'react';
import {Layout, Header , Navigation, Drawer, Content } from 'react-mdl';
import './App.css';
import Main from './components/main';

class App extends Component {
  render() {
    return (
     /* Uses a header that scrolls with the text, rather than staying locked at the top */
      <div className="demo-big-content">
          <Layout>
              <Header title="Title" scroll>
                  <Navigation>
                      <a href="/">Link</a>
                      <a href="/">Link</a>
                      <a href="/">Link</a>
                      <a href="/">Link</a>
                  </Navigation>
              </Header>
              <Drawer title="Title">
                  <Navigation>
                      <a href="/">Link</a>
                      <a href="/">Link</a>
                      <a href="/">Link</a>
                      <a href="/">Link</a>
                  </Navigation>
              </Drawer>
              <Content>
                  <div className="page-content" />
                  <Main />
              </Content>
          </Layout>
      </div>
    );
  }
}

export default App;
