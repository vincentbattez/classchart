import React, { Component } from 'react';

// Components
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'

// Pages
import PageDashboard from './pages/PageDashboard'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Sidebar />

        <div class="page-wrapper">
          <PageDashboard />
        </div>

        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
