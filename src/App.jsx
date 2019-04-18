import React from 'react';
import Footer from './components/Footer.jsx';
import MainContent from './components/MainContent.jsx';
import Clock from './components/Clock.jsx';
import './scripts/script.js';

export default class App extends React.Component {
  render() {
    return (
      <main className="main-container">
        <Clock   />
        <MainContent />
        <Footer />
      </main>
    );
  }
}
