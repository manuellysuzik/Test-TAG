import React, { Component } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import api from './../../services/api';
import TabelaResultado from './TabelaPesquisa';

export default class Main extends Component {
  state = {
    data: [],
  };

  async componentDidMount() {
    this.setState({ loading: true });

    const { data } = await api.get();

    this.setState({ data: data });

    console.log(data);
  }

  render() {
    return (
      <div style={{ background: '#ff9e16' }}>
        <Container className="text-center" fluid="lg">
          <Card>
            <Card.Header>
              <h1>Livros</h1>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col>
                  <TabelaResultado livrosGR={this.state.data}></TabelaResultado>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Container>
      </div>
    );
  }
}
