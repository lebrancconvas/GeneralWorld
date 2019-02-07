import React, { Component } from 'react';
import logo from './logo.svg';
import Navbar from './components/navbar.jsx';
import Footer from './components/footer.jsx';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar />
        </header>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
