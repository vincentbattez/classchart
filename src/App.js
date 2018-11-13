import React, { Component } from 'react';
import { BrowserRouter as Router, Route, } from 'react-router-dom'

// Components
import Header  from './components/Header'
import Sidebar from './components/Sidebar'
import Footer  from './components/Footer'

// Pages
import PageDashboard from './pages/PageDashboard'
import PageClasse    from './pages/PageClasse'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />

        <Router>
          <React.Fragment>
            <Sidebar />

            <div class="page-wrapper">
              <Route path="/" exact component={PageDashboard}/>
              <Route path="/classe/:section/:groupe" exact component={PageClasse}/>
            </div>
         </React.Fragment>
        </Router>

        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
