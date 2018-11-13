import React, { Component } from 'react'

// Component
import TitlePage from '../components/TitlePage'
import Card from '../components/Card'
import Table from '../components/Table'

export default class PageClasse extends Component {

  render() {   
    return (
      <div className="container-fluid">
        {/* Title */}
        <TitlePage breadcrumb={[]} title={`Classe de ${this.props.match.params.section} ${this.props.match.params.groupe}`} />

        <div className="row">
          {/* Top 10 */}
          <Card title="Liste des élèves (30)">
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