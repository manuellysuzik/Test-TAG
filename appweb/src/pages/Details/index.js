import React, { useEffect, useState } from 'react';
import { Card, Container, Image, Col, Row, ListGroup } from 'react-bootstrap';
import livrosTAG from '../../database/livros.json';
import { useParams } from 'react-router-dom';
import { find } from 'lodash';

/*título do livro,
- capa,
- autor(a),
- mês/ano edição,
- curador(a),
- número de páginas,
- total de avaliações TAG
- total de avaliações GoodReads.*/

const Details = () => {
  const { isbn } = useParams();
  const [livro, setLivro] = useState({});
  useEffect(() => {
    const result = find(livrosTAG.results, (item) => item.isbn == isbn);
    setLivro(result);
  });

  return (
    <Container fluid>
      <Card className="text-center">
        <Card.Header>
          <h1></h1>
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
                  <ListGroup.Item>Data de Edição: {livro.isbn}</ListGroup.Item>
                  <ListGroup.Item>Curador:{livro.curator}</ListGroup.Item>
                  <ListGroup.Item>Páginas: {livro.pages}</ListGroup.Item>
                  <ListGroup.Item>Total de Avaliaçõe TAG:</ListGroup.Item>
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
