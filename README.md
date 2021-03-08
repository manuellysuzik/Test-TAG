# Frontend para comparação de notas de livros
Esse repositório é um teste técnico. Usamos ele em nosso processo seletivo para entendermos um pouco mais sobre o modo de trabalho das pessoas participantes. Nesse repositório, você terá a descrição do problema, assim como os requerimentos funcionais e técnicos esperados.

## O problema
Você foi incumbido de criar um webapp que faça análise comparativa entre as notas que os associados da TAG deram, pelo aplicativo atual do clube, com as avaliações que as pessoas fizeram aos mesmos livros no site GoodReads. O escopo do webapp é meramente avaliativo, não pretendemos utilizá-lo em lugar algum.

O webapp deverá:
1. Consumir as APIs de avaliação dos livros conforme descrito abaixo.
2. Exibir as comparações entre as médias de avaliações TAG e médias GoodReads.
  1. A exibição deve ser ordenada com base no campo `edition` do `livros.json`, que contém dados na forma “Mês de Ano” em ordem descendente (mês mais recente primeiro).
3. Ao clicar em cada comparação de livro, o webapp deverá navegar para uma tela de detalhes, que exibe:
  - título do livro,
  - capa,
  - autor(a),
  - mês/ano edição,
  - curador(a),
  - número de páginas,
  - total de avaliações TAG
  - total de avaliações GoodReads.
  
O design do webapp fica a critério da pessoa candidata (vocẽ).

## Avaliação
Aplicamos esse mesmo teste para todas pessoas candidatas para as vagas de _Desenvolvedor Web_ (junior, pleno e senior).

As expectativas e critérios na avaliação variam de acordo com a vaga para qual o candidato aplicou:
Expectativas para pessoas participando de um processo seletivo Junior:
- Familiaridade de JS, HTML5 e CSS
  - Boa semântica do HTML5
  - Boa organização do CSS
  - Baixa complexidade do código de JS
- Familiaridade com o framework React
  - Componetização
  - (Desejável) Testes
  - Bom uso das APIs do React
- Familiaridade com o consumo de APIs
  - Consumo de APIs com tratamento dos diversos códigos HTTP.
- Criar designs agrádaveis aos usuários
- Aplicação de algumas boas práticas de código
  - Evitar código morto
  - Código legível
  - Evitar componentes gigantes
  - ...
- Documentação de como rodar a aplicação

Pessoas participando de um processo seletivo pleno:
- Domínio de JS/TS HTML5 e CSS
  - Boa semântica do HTML5
  - Boa organização do CSS
  - Baixa complexidade do código de JS/TS
- Domínio do framework React
  - Componentes bem estruturados e com testes
  - Bom uso das APIs do React
- Domínio com o consumo de APIs
  - Consumo de APIs com tratamento dos diversos códigos HTTP.
- Criação de designs agrádaveis aos usuários
  - Desktop e mobile
- Aplicação de boas práticas de código
- Documentação de como rodar a aplicação
- Uso de váriaveis de ambiente
- Configuração de scripts de testes e de linters no projeto
  - npm scripts
- (Desejável) Criação de uma API que retorna o resultado de `livros.json`.

Pessoas participando de um processo seletivo Senior:
- Domínio de JS/TS HTML5 e CSS
  - Boa semântica do HTML5
  - Boa organização do CSS
  - Uso de CSS in JS/TS
  - Baixa complexidade do código de JS/TS
- Domínio do framework React
  - Componentes bem estruturados e com testes
  - Bom uso das APIs do React
- Domínio com o consumo de APIs
  - Consumo de APIs com tratamento dos diversos códigos HTTP.
- Criação de designs agrádaveis aos usuários
  - Desktop e mobile
- Aplicação de boas práticas de código
- Documentação de como rodar a aplicação
- Uso de váriaveis de ambiente
- Configuração de scripts de testes e de linters no projeto
  - npm scripts
- Domínio de alguma ferramenta (SSR ou SSG)
  - Preparalção da aplicação para rodar em produçao
  - Em SSR, containerização da aplicação
- (Desejável) Criação de uma API que retorna o resultado de `livros.json`.
- (Desejável) Pipeline CI/CD que executam os scripts de build, linter e testes.

## Considerações Técnicas

### APIs de avaliação dos livros
- TAG: Os dados do aplicativo da TAG podem ser simulados através do json disponível no reposiório (livros.json)
- GoodReads: É preciso consumir a API, e para facilitar nós fornecemos um servidor http proxy para evitar problemas de comunicação, vide a pasta `servidor_proxy` no repositório.

 O campo a ser utilizado para comparar um livro entre TAG e GoodReads deve ser o ISBN, cujo valor pode não conferir e o livro não existir na API do GoodReads. Esses casos devem ser tratados pelo seu webapp.
    
### Limitações técnicas:
* Não utilize bibliotecas, rotinas prontas, códigos existentes na linguagem JavaScript para fazer a ordenação dos livros. Você deve escrever o algoritmo, uma vez que isso faz parte da avaliação.

## Resultado do teste
* Assim que o prazo de 7 dias acabar a TAG irá removê-lo do repositório.
