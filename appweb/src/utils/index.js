import livrosGR from '../../src/database/livrosGR.json';

class Utils {
  findAVG(title) {
    const livros = livrosGR.filter((item) => item.best_book.title === title);
    return livros.length
      ? livros[0].average_rating
      : 'Avaliação não encontrada';
  }
  sortByAno(anoX, anoY) {
    if (anoX < anoY) {
      return -1;
    }
    if (anoX === anoY) {
      return 0;
    }

    return 1;
  }
  sortByMes(mesX, mesY) {
    if (mesX < mesY) {
      return -1;
    }
    if (mesX === mesY) {
      return 0;
    }

    return 1;
  }
}

export default new Utils();
