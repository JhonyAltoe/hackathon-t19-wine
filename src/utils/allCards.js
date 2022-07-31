import Harmonization from '../assets/harmonization.webp';
import Loja from '../assets/loja-fisica.jpg';

const harmonization = {
  title: 'Harmonização',
  img: Harmonization,
  description: 'Vai comer algo? Veja opções de vinhos para hamornizar com seu prato',
  link1:
    'https://www.wine.com.br/winepedia/dicas/sete-dicas-de-harmonizacao/?gclid=CjwKCAjwrZOXBhACEiwA0EoRD6gwWSE8Zb1JhHiM08_gnGM-OmAbuOaLpBWMN8gWaT3lA6aZG7mlQBoCe7oQAvD_BwE',
  color: 'rgb(176, 156, 86)',
  order: 'first'
};

const ofertas = {
  title: 'Ofertas',
  img: '',
  description: 'Confira as melhores ofertas em vinhos e descontos exclusivos para assinantes',
  link1: 'https://www.wine.com.br/vinhos-promocao',
  color: 'rgb(242, 102, 73)',
  order: 'last'
};

const lojas = {
  title: 'Nossas lojas físicas',
  img: Loja,
  description: 'Encontre uma Wine perto de você',
  link1: 'https://www.wine.com.br/lojas/',
  color: 'rgb(0, 180, 149)',
  order: 'first'
};

const allCards = [harmonization, ofertas, lojas];

export default allCards;
