import React, { useState } from 'react';
import { Table, Card, Col, Image, Button } from 'react-bootstrap';
import livrosTag from './livros.json';
import { Link } from 'react-router-dom';
import livrosGR from './livrosGR.json';

const TabelePesquisa = (props) => {
  console.log(livrosGR);

  const dadosTabela = {
    title: livrosTag.results.map((item, idx) => (
      <tr key={idx}>
        <td key={idx}>
          <div className="mb-1">
            <Col>
              <Image src={item.cover.url} width="200px" rounded />
            </Col>
            <Col>
              {`Título: ${item.name}`}
              <br />
              {`Autor: ${item.author}`}
              <br />
              {`Avaliação TAG: ${(item.totalRatings / item.numRatings).toFixed(
                2
              )}/ Avaliação GOODREADS :`}
            </Col>
          </div>
          <Button size="lg" variant="info" block>
            <Link
              key={idx}
              to={'/details/:' + item.isbn}
              style={{ textDecoration: 'none', color: 'white' }}
            >
              Detalhes
            </Link>
          </Button>
        </td>
        <td>{item.edition}</td>
      </tr>
    )),
  };
  return (
    <div>
      <Card>
        <Table bordered style={{ backgroundColor: '#D4F1F4' }}>
          <thead>
            <tr>
              <th>Livro 1</th>
              <th>Data de Publicação</th>
            </tr>
          </thead>
          <tbody>{dadosTabela.title}</tbody>
        </Table>
      </Card>
    </div>
  );
};

export default TabelePesquisa;
