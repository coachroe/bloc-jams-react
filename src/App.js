import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';
import styled from 'styled-components';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Bloc Jams</h1>
        </header>
          <NavStyles>
            <nav>
              <Link to='/'>Landing</Link>
              <Link to='/library'>Library</Link>
            </nav>
          </NavStyles>
        <main>
          <Route exact path="/" component={Landing} />
          <Route path="/library" component={Library} />
          <Route path="/album/:slug" component={Album} />
        </main>
      </div>
    );
  }
}

const NavStyles = styled.div`
  display: grid;
  place-content: center;
  position: relative;
  border-radius: 5px;
  padding: 10px;
  outline: 1px solid #fafafa;
  transition: outline ease-in 0.2s;
  &:hover,
  &:focus {
    outline: 1px solid #eaeaea;
  }
`;

export default App;
