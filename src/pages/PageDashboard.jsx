import React, { Component } from 'react'

// Component
import TitlePage from '../components/TitlePage'
import Card from '../components/Card'

export default class PageDashboard extends Component {
  render() {
    return (
      <div className="container-fluid">
        {/* Title */}
        <TitlePage breadcrumb={['Home', 'Dashboard']} title="Dashboard" />
        
        <div className="row">
          {/* Moyenne */}
          <Card title="Moyenne général" size="6">
            <div className="text-right">
              <h2 className="font-light m-b-0"><i className={(/*props.isProgress*/ true) ? 'ti-arrow-up text-success' : 'ti-arrow-down text-danger'}></i> 14.3/20</h2>
              <span className="text-muted">Moyenne</span>
            </div>
          </Card>

          {/* Classement */}
          <Card title="Classement" size="6">
            <div className="text-right">
              <h2 className="font-light m-b-0"><i className={(/*props.isProgress*/ false) ? 'ti-arrow-up text-success' : 'ti-arrow-down text-danger'}></i> 6ème</h2>
              <span className="text-muted">sur 30 éléves</span>
            </div>
          </Card>
        </div>

        <div className="row">
          {/* Statistique */}
          <Card title="Statistique" size="12">

          </Card>
        </div>

        <div className="row">
          {/* Top 10 */}
          <Card title="Top 10 meilleurs éléves" size="12">

          </Card>
        </div>
      </div>
    )
  }
}
