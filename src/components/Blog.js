/* import React, { Component } from "react";
import News from "./News";

class Blog extends Component {

state = {
  noticias : []
}

  componentDidMount() {
    this.consultaNoticias();
  }

  consultaNoticias = () => {
    let url = 'https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=d766bc99f3834102b779f9296aabaf73';
    let url = '/api/news'; 
    fetch(url)
      .then(respuesta => {
        return respuesta.json();
      })
      .then(noticias => {
        console.log(noticias);
        this.setState({
          noticias: noticias.articles
        })
      });
  }

  render() {
    return (
      <News noticias={this.state.noticias}/>
    );
  }
}

export default Blog;
 */

import React, { Component } from "react";
import News from "./News";
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('d766bc99f3834102b779f9296aabaf73'); // Reemplaza 'TU_API_KEY_DE_NEWS_API' con tu API key real

class Blog extends Component {
  state = {
    noticias: [],
  };

  componentDidMount() {
    this.consultaNoticias();
  }

  consultaNoticias = () => {
    // Utiliza el método `everything` de la biblioteca `newsapi` para obtener noticias
    newsapi.v2.everything({
      q: 'bitcoin', // Tu consulta de búsqueda
      sources: 'bbc-news,the-verge', // Tus fuentes preferidas
      domains: 'bbc.co.uk,techcrunch.com', // Tus dominios preferidos
      from: '2017-12-01', // Fecha de inicio
      to: '2017-12-12', // Fecha de finalización
      language: 'en', // Idioma de las noticias
      sortBy: 'relevancy', // Orden de relevancia
      page: 2, // Página de resultados
    })
      .then((response) => {
        console.log(response);
        this.setState({
          noticias: response.articles,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  render() {
    return <News noticias={this.state.noticias} />;
  }
}

export default Blog;