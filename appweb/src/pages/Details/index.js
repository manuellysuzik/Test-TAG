import React from 'react';
import { Card, Container, Image, Col, Row, ListGroup } from 'react-bootstrap';
import livrosTAG from './../Main/livros.json';
import { useParams } from 'react-router-dom';

/*título do livro,
- capa,
- autor(a),
- mês/ano edição,
- curador(a),
- número de páginas,
- total de avaliações TAG
- total de avaliações GoodReads.*/

const Details = () => {
  var { isbn } = useParams();
  isbn.replace(':', '');

  const livro = livrosTAG.results.find((item) => (item.isbn = isbn));
  isbn = 0;
  return (
    <Container fluid>
      <Card className="text-center">
        <Card.Header>
          <h1>{livro.name}</h1>
        </Card.Header>
        <Card.Body>
          <Row>
            <Col>
              <Image src={livro.cover.url} width="350" />
            </Col>
            <Col>
              <Card.Body
                style={{
                  fontFamily: 'verdana, sans-serif',
                  fontSize: '25px',
                  textAlign: 'left',
                }}
              >
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    Data de Edição: {livro.edition}
                  </ListGroup.Item>
                  <ListGroup.Item>Curador: {livro.curator} </ListGroup.Item>
                  <ListGroup.Item>Páginas: {livro.pages}</ListGroup.Item>
                  <ListGroup.Item>
                    Total de Avaliaçõe TAG: {livro.totalRatings}
                  </ListGroup.Item>
                  <ListGroup.Item>Total de Avaliaçõe GOODREAD:</ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Details;
