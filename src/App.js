import React, { Component } from 'react';
import {Layout, Header , Navigation, Drawer, Content } from 'react-mdl';
import './App.css';
import Main from './components/main';
import {Link} from 'react-router-dom'

class App extends Component {
  render() {
    return (
     /* Uses a header that scrolls with the text, rather than staying locked at the top */
      <div className="demo-big-content">
          <Layout>
          <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">MyPortfolio</Link>} scroll>
                  <Navigation >
                      
                      <Link to="/resume">Resume</Link>
                      <Link to="/about">About</Link>
                      <Link to="/project">Projects</Link>
                      <Link to="/contact">Contact</Link>
                  </Navigation>
              </Header>
              <Drawer title="Menu">
                  <Navigation>
                    
                    <Link to="/resume">Resume</Link>
                    <Link to="/about">About</Link>
                    <Link to="/project">Projects</Link>
                    <Link to="/contact">Contact</Link>
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
