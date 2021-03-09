import livrosGR from '../../src/database/livrosGR.json';

const findAVG = (title) => {
  const livros = livrosGR.filter((item) => {
    if (item && item.best_book && item.best_book.title) {
      return item.best_book.title == title;
    }
  });

  return livros.length
    ? livros[0].average_rating + ` ${livros[0].best_book.title}`
    : 'Avaliação não encontrada';
};
export default findAVG;
