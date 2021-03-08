const fetch = require('node-fetch')
const parser = require('fast-xml-parser');
const livrosTag = require('./../../livros.json')
const fs = require('fs');


async function Controller(req, res) {
    const secret = `Ynok75rEWd4uL8mH23HfCsvGSoMIU0afZi1x52R89zw`
    const front = 'https://localhost:3000'
    const key = `KGXBPKnyuYSnSpYDYo7rA`
    const goodReadsURL = encodeURI(`https://www.goodreads.com/search/index.xml?&key=KGXBPKnyuYSnSpYDYo7rA&search=best_book&q=`)

    //retira o "/" para sobrar apenas o nome do livro buscado

    //vai até a API pegar os dados pelo que foi buscado
    const objetoGR = []

    for (var i in livrosTag.results) {
        const response = await fetch(encodeURI(`${goodReadsURL}${livrosTag.results[i].name}`))
            .then(result => result.text())


        const dados = await parser.parse(response)

        //const avaliacao = await dados.GoodreadsResponse.search.results.work.avarage_rating
        objetoGR.push(dados.GoodreadsResponse.search.results['work'][0])


    }

    /*await fs.appendFile('livrosGR.json', JSON.stringify(objetoGR), (err) => {
        if (err) throw err;
        console.log('Aquivo Salvo')
    })*/

    res.json(objetoGR)

}

module.exports = Controller