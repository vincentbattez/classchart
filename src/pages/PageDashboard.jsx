import React, { Component } from 'react'

// Component
import TitlePage from '../components/TitlePage'
import Card from '../components/Card'
import MatiereChart from '../components/MatiereChart'
import Table from '../components/Table'

export default class PageDashboard extends Component {

  render() {
    const mock_data = [
      { matiere: 'Math',       moyenne: 12 },
      { matiere: 'Chinois',    moyenne: 15 },
      { matiere: 'Anglais',    moyenne: 10 },
      { matiere: 'Géographie', moyenne: 13 },
      { matiere: 'Physique',   moyenne: 8  },
      { matiere: 'Histoire',   moyenne: 6  },
    ];
    

    return (
      <div className="container-fluid">
        {/* Title */}
        <TitlePage breadcrumb={[]} title="Dashboard" />
        
        <div className="row">
          {/* Moyenne */}
          <Card title="Moyenne général">
            <div className="text-right">
              <h2 className="font-light m-b-0"><i className={(/*props.isProgress*/ true) ? 'ti-arrow-up text-success' : 'ti-arrow-down text-danger'}></i> 14.3/20</h2>
              <span className="text-muted">Moyenne</span>
            </div>
          </Card>

          {/* Classement */}
          <Card title="Classement">
            <div className="text-right">
              <h2 className="font-light m-b-0"><i className={(/*props.isProgress*/ false) ? 'ti-arrow-up text-success' : 'ti-arrow-down text-danger'}></i> 6<sup>ème</sup></h2>
              <span className="text-muted">sur 30 éléves</span>
            </div>
          </Card>
        </div>

        <div className="row">
          {/* Statistique */}
          <Card title="Statistique">
            <select className="custom-select pull-right">
              <option value="1" selected>1er Trismestre</option>
              <option value="2">2ème Trismestre</option>
              <option value="3">3ème Trismestre</option>
            </select>
            <div className="row">
              {/* Matière Chart */}
              <div className="col-sm-6">
                <MatiereChart data={mock_data} />
              </div>

              {/* Liste de moyenne */}
              <div className="col-sm-6">
                <Table>
                  <thead>
                    <tr>
                      <th colSpan="2">Matière</th>
                      <th>Moyenne</th>
                      <th>Coefficient</th>
                      <th>Classement</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td style={{width: '50px'}}><span className="round round-danger">M</span></td>
                      <td>Math</td>
                      <td>12/20</td>
                      <td>x4</td>
                      <td>15<sup>ème</sup></td>
                    </tr>
                    <tr>
                      <td style={{width: '50px'}}><span className="round round-success">C</span></td>
                      <td>Chinois</td>
                      <td>15/20</td>
                      <td>x1</td>
                      <td>4<sup>ème</sup></td>
                    </tr>
                    <tr>
                      <td style={{width: '50px'}}><span className="round round-primary">A</span></td>
                      <td>Anglais</td>
                      <td>10/20</td>
                      <td>x2</td>
                      <td>20<sup>ème</sup></td>
                    </tr>
                    <tr>
                      <td style={{width: '50px'}}><span className="round round-secondary">G</span></td>
                      <td>Géographie</td>
                      <td>13/20</td>
                      <td>x1</td>
                      <td>12<sup>ème</sup></td>
                    </tr>
                    <tr>
                      <td style={{width: '50px'}}><span className="round round-warning">P</span></td>
                      <td>Physique</td>
                      <td>8/20</td>
                      <td>x4</td>
                      <td>25<sup>ème</sup></td>
                    </tr>
                    <tr>
                      <td style={{width: '50px'}}><span className="round round-info">H</span></td>
                      <td>Histoire</td>
                      <td>6/20</td>
                      <td>x3</td>
                      <td>30<sup>ème</sup></td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>

          </Card>
        </div>

        <div className="row">
          {/* Top 10 */}
          <Card title="Top 10 meilleurs éléves">
            <Table>
              <thead>
                <tr>
                  <th colSpan="2">Matière</th>
                  <th>Moyenne</th>
                  <th>Classement</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td style={{width: '50px'}}><span className="round round-danger">M</span></td>
                  <td>Leon Schmitt</td>
                  <td>12/20</td>
                  <td>1<sup>er</sup></td>
                </tr>
                <tr>
                  <td style={{width: '50px'}}><span className="round round-success">C</span></td>
                  <td>Nakia Ward</td>
                  <td>15/20</td>
                  <td>2<sup>ème</sup></td>
                </tr>
                <tr>
                  <td style={{width: '50px'}}><span className="round round-primary">A</span></td>
                  <td>Avery Wuckert</td>
                  <td>10/20</td>
                  <td>3<sup>ème</sup></td>
                </tr>
                <tr>
                  <td style={{width: '50px'}}><span className="round round-secondary">G</span></td>
                  <td>Trent Lynch</td>
                  <td>13/20</td>
                  <td>4<sup>ème</sup></td>
                </tr>
                <tr>
                  <td style={{width: '50px'}}><span className="round round-warning">P</span></td>
                  <td>Jordi Renner</td>
                  <td>8/20</td>
                  <td>5<sup>ème</sup></td>
                </tr>
                <tr className="active">
                  <td style={{width: '50px'}}><span className="round round-info">H</span></td>
                  <td>Vincent Battez</td>
                  <td>6/20</td>
                  <td>6<sup>ème</sup></td>
                </tr>
                <tr>
                  <td style={{width: '50px'}}><span className="round round-success">C</span></td>
                  <td>Nakia Ward</td>
                  <td>15/20</td>
                  <td>7<sup>ème</sup></td>
                </tr>
                <tr>
                  <td style={{width: '50px'}}><span className="round round-primary">A</span></td>
                  <td>Avery Wuckert</td>
                  <td>10/20</td>
                  <td>8<sup>ème</sup></td>
                </tr>
                <tr>
                  <td style={{width: '50px'}}><span className="round round-warning">P</span></td>
                  <td>Jordi Renner</td>
                  <td>8/20</td>
                  <td>9<sup>ème</sup></td>
                </tr>
                <tr>
                  <td style={{width: '50px'}}><span className="round round-primary">A</span></td>
                  <td>Avery Wuckert</td>
                  <td>10/20</td>
                  <td>10<sup>ème</sup></td>
                </tr>
              </tbody>
            </Table>
          </Card>
        </div>
      </div>
    )
  }
}