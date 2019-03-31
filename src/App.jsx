import React from 'react';
import Footer from './components/Footer.jsx'
import MainContent from './components/MainContent.jsx'

export default class App extends React.Component {
  render() {
    return (
      <main className="main-container">
        <MainContent />
        <Footer />
      </main>
    );
  }
}
