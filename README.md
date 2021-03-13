*RESUMO*
A Aplicação tem como finalidade exibir em uma tabela, ordenada por data de edição em ordem decrescente ( mais recentes primeiro ), uma comparação da média de avaliação registradas pelo aplicativo da TAG e retiradas do site GoodReads (www.goodreads.com) através da API disponibilizada pela mesma. Também é possível redirecionar o usuário para uma página de Detalhes.

*Páginas*
- Home:
Exibição da tabela / lista de livros com as médias de avaliação da TAG e GoodReads e o título do livro com suas respectivas datas de primeira edição, escolhidas no formato "mês de ano" e ordenadas por datas mais recentes primeiro. Cada item da tabela é composto por um botão de detalhes que redireciona o usuário para uma página com as informações adicionais do livro escolhido.
 *REGRA DE NEGÓCIO*
    1 . A API foi consultada usando o critério da pesquisa por isbn, levando em consideração os dados do arquivo JSON "livros.json" localizado na pasta src/database. Para melhor perfomace, o resultado da consulta da API foi armazenado em um outro arquivo "livrosGR.json" localizado na mesma pasta, para a consulta dentro da aplicação React.
    2 . Ao clicar em detalhes, a aplicação envia no endereço o isbn do livro selecionado para ser possível carregar os dados separadamente de cada livro.

- Detalhes:
Exibição dos detalhes do livro escolhido com as seguintes informações:

- título do livro,
- capa,
- autor(a),
- mês/ano edição,
- curador(a),
- número de páginas,
- total de avaliações TAG
- total de avaliações GoodReads.

*REGRA DE NEGÓCIO*
    1 . O componente "Details" recebe o isbn usando a função useParams da biblioteca "react-router-dom". Com essa informação , então, pode consultar dentro de "livros.json" os dados do livro.
    2 . O total de avaliações da GoodReads está disponível no arquivo "livrosGR.json".