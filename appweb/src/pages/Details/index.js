import React, { useEffect, useState } from 'react';
import { Card, Container, Image, Col, Row, ListGroup } from 'react-bootstrap';
import livrosTAG from '../../database/livros.json';
import { useParams } from 'react-router-dom';
import { find } from 'lodash';
import Utils from '../../utils/index';
import { BsFillCalendarFill } from 'react-icons/bs';

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

  return (
    <Container fluid width="100%">
      <Card className="text-center bg-info">
        <Card.Header className="bg-warning display-4">DETALHES</Card.Header>
        <Card.Body>
          <Row>
            <Col>
              <Image
                src={livro.cover && livro.cover.url ? livro.cover.url : ''}
                width="414"
                className="img-fluid"
              />
            </Col>
            <Col>
              <ListGroup variant="flush" className="text-center">
                <ListGroup.Item className="lead">
                  Título:
                  <h4>{livro.name}</h4>
                </ListGroup.Item>
                <ListGroup.Item className="lead bg-info text-white">
                  Autor(a):
                  <h4>{livro.author}</h4>
                </ListGroup.Item>
                <ListGroup.Item className="lead">
                  <div>
                    <BsFillCalendarFill className="float-start" />
                    Data de Edição:
                    <h4>{livro.edition}</h4>
                  </div>
                </ListGroup.Item>
                <ListGroup.Item className="lead">
                  Curador:<h4>{livro.curator}</h4>
                </ListGroup.Item>
                <ListGroup.Item className="lead">
                  Páginas:<h4>{livro.pages}</h4>
                </ListGroup.Item>
                <ListGroup.Item className="lead">
                  Total de Avaliações TAG:<h4>{livro.totalRatings}</h4>
                </ListGroup.Item>
                <ListGroup.Item className="lead">
                  Total de Avaliações GOODREAD:
                  <h4>{Utils.findTotalAVG(livro.name)}</h4>
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Details;
