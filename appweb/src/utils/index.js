import livrosGR from '../../src/database/livrosGR.json';
import _ from 'lodash';

class Utils {
  findAVG(idx) {
    try {
      const valor = livrosGR[idx].average_rating;
      return valor;
    } catch (e) {
      return 'Não disponível';
    }
  }

  findTotalAVG(title) {
    var totalAvg = livrosGR.filter((item) => item.best_book.title === title);

    return totalAvg.length ? totalAvg[0].ratings_count : 'Não Disponível';
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
