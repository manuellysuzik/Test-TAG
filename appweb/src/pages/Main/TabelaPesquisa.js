/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { Table, Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Utils from '../../utils';
import livrosTag from '../../database/livros.json';
import livrosGR from '../../database/livrosGR.json';
import { FaBookmark, FaBookOpen, FaAddressBook } from 'react-icons/fa';

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

const livrosOrdenados = livrosTag.results.sort((itemY, itemX) => {
  const [mesX, anoX] = itemX.edition.split(' de ');
  const [mesY, anoY] = itemY.edition.split(' de ');

  const resultAno = Utils.sortByAno(anoX, anoY);
  return resultAno === 0
    ? Utils.sortByMes(meses[mesX], meses[mesY])
    : resultAno;
});

const TabelaPesquisa = (props) => {
  const dadosTabela = {
    table: livrosOrdenados.map((item, idx) => (
      <tr key={idx}>
        <td key={idx}>
          <div className="mb-1">
            <Col className="font-weight-bolder text-left">
              <h3>
                <FaAddressBook size="2em" color="#ff9e16" />
                {`Titulo:${item.name}`}
              </h3>
              <br />
              <h3>
                <FaBookmark size="2em" color="#ff9e16" />
                {` Avaliação TAG: ${(
                  item.totalRatings / item.numRatings
                ).toFixed(2)}`}
              </h3>
              <br />
              <h3>
                <FaBookOpen size="2em" color="#ff9e16" />
                {` Avaliação GOODREADS:${Utils.findAVG(idx)}`}
              </h3>
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
        <td className="align-middle">
          <h4>{item.edition}</h4>
        </td>
      </tr>
    )),
  };
  return (
    <div>
      <Card className="table table-hover">
        <Table bordered style={{ backgroundColor: '#D4F1F4' }}>
          <thead>
            <tr>
              <th>Dados</th>
              <th>Data de Publicação</th>
            </tr>
          </thead>
          <tbody>{dadosTabela.table}</tbody>
        </Table>
      </Card>
    </div>
  );
};

export default TabelaPesquisa;
