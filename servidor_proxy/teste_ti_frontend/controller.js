const fetch = require('node-fetch')
const parser = require('fast-xml-parser');
const livrosTag = require("../../appweb/src/database/livros.json")
const fs = require('fs');


async function Controller(req, res) {
    const secret = `Ynok75rEWd4uL8mH23HfCsvGSoMIU0afZi1x52R89zw`
    const front = 'https://localhost:3000'
    const key = `KGXBPKnyuYSnSpYDYo7rA`
    const goodReadsURL = encodeURI(`https://www.goodreads.com/search/index.xml?&key=KGXBPKnyuYSnSpYDYo7rA&search=best_book&q=`)

    const objetoGR = []

    for (var i in livrosTag.results) {
        const response = await fetch(encodeURI(`${goodReadsURL}${livrosTag.results[i].isbn}`))
            .then(result => result.text())

        const dados = await parser.parse(response)

        if (!dados.GoodreadsResponse.search.results["work"]) {
            objetoGR.push("Livro não encontrado")
        }
        objetoGR.push(dados.GoodreadsResponse.search.results["work"])

    }
    //Cria um arquivo JSON com o resultado da API 
    /*fs.appendFile('livrosGR.json', JSON.stringify(objetoGR), (err) => {
        if (err) throw err;
        console.log('Arquivo Salvo')
    })*/

    res.json(objetoGR)

}

module.exports = Controller