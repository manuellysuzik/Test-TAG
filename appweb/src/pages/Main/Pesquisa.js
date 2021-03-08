import React from 'react';
import { InputGroup, Button, FormControl, Form } from 'react-bootstrap';

const Pesquisa = (props) => {
  return (
    <div>
      <Form className="mb-3" onSubmit={props.onSubmitPesquisa}>
        <InputGroup>
          <FormControl
            onChange={props.OnChangePesquisa}
            value={props.pesquisaValue}
            placeholder="Digite o titulo de um livro aqui"
            aria-label="Pesquisar"
            aria-describedby="basic-addon1"
          />
          <InputGroup.Append>
            <Button variant="info" type="submit">
              Procurar
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </Form>
    </div>
  );
};

export default Pesquisa;
