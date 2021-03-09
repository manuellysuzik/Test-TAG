import React from 'react';
import { Table, Card, Col, Image, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import findAVG from '../../utils';
import livrosTag from '../../database/livros.json';

const meses = {
  Janeiro: 1,
  Fevereiro: 2,
  Março: 3,
  Abril: 4,
  Maio: 5,
  Junho: 6,
  Julho: 7,
  Agosto: 8,
  Setembro: 9,
  Outubro: 10,
  Novembro: 11,
  Dezembro: 12,
};
const sortByAno = (anoX, anoY) => {
  if (anoX < anoY) {
    return -1;
  }
  if (anoX === anoY) {
    return 0;
  }

  return 1;
};
const sortByMes = (mesX, mesY) => {
  if (mesX < mesY) {
    return -1;
  }
  if (mesX === mesY) {
    return 0;
  }

  return 1;
};

const livrosOrdenados = livrosTag.results.sort((itemY, itemX) => {
  const [mesX, anoX] = itemX.edition.split(' de ');
  const [mesY, anoY] = itemY.edition.split(' de ');

  const resultAno = sortByAno(anoX, anoY);
  return resultAno === 0 ? sortByMes(meses[mesX], meses[mesY]) : resultAno;
});

const TabelePesquisa = (props) => {
  const dadosTabela = {
    title: livrosOrdenados.map((item, idx) => (
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
              )}/ Avaliação GOODREADS :${findAVG(item.name)}`}
            </Col>
          </div>
          <Button size="lg" variant="info" block>
            <Link
              key={idx}
              to={'/details/' + item.isbn}
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
