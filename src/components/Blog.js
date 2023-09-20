import React, { Component } from "react";
import News from "./News";

class Blog extends Component {

state = {
  noticias : []
}

  componentDidMount() {
    this.consultaNoticias();
  }

  consultaNoticias = () => {
    /* let url = 'https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=d766bc99f3834102b779f9296aabaf73'; */
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
