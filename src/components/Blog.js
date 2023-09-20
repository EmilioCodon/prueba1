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

const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('d766bc99f3834102b779f9296aabaf73');

class Blog extends Component {
  state = {
    noticias: []
  }

  componentDidMount() {
    // Ejemplo de solicitud a /v2/top-headlines
    newsapi.v2.topHeadlines({
      sources: 'bbc-news,the-verge',
      q: 'bitcoin',
      category: 'business',
      language: 'en',
      country: 'us'
    })
    .then(response => {
      console.log(response);
      this.setState({
        noticias: response.articles
      });
    })
    .catch(error => {
      console.error(error);
    });
  }

  render() {
    return (
      <div>
        {this.state.noticias.map((noticia, index) => (
          <div key={index}>
            <h2>{noticia.title}</h2>
            <p>{noticia.description}</p>
            {/* Agrega más detalles de la noticia según tus necesidades */}
          </div>
        ))}
      </div>
    );
  }
}

export default Blog;
