import React, { useEffect, useState } from 'react';
import { Card, Container, Image, Col, Row, ListGroup } from 'react-bootstrap';
import livrosTAG from '../../database/livros.json';
import { useParams } from 'react-router-dom';
import { find } from 'lodash';
import Utils from '../../utils/index';

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
    const result = find(livrosTAG.results, (item) => item.isbn === isbn);
    setLivro(result);
  });

  const avgTAG = (livro.totalRatings / livro.numRatings).toFixed(2);
  return (
    <Container fluid style={{ background: '#ff9e16' }}>
      <Card className="text-center">
        <Card.Header>
          <h1></h1>
        </Card.Header>
        <Card.Body>
          <Row>
            <Col>
              <Image
                src={livro.cover && livro.cover.url ? livro.cover.url : ''}
                width="350"
              />
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
                  <ListGroup.Item>Autor(a): {livro.author}</ListGroup.Item>
                  <ListGroup.Item>
                    Data de Edição: {livro.edition}
                  </ListGroup.Item>
                  <ListGroup.Item>Curador:{livro.curator}</ListGroup.Item>
                  <ListGroup.Item>Páginas: {livro.pages}</ListGroup.Item>
                  <ListGroup.Item>
                    Total de Avaliações TAG:{livro.totalRatings}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Total de Avaliações GOODREAD:{Utils.findAVG(livro.name)}
                  </ListGroup.Item>
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
