import React, { Component } from "react";
import News from "./News";

class Blog extends Component {
  state = {
    noticias: [],
  };

  componentDidMount() {
    this.consultaNoticias();
  }

  consultaNoticias = () => {
    /* let url = 'https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=d766bc99f3834102b779f9296aabaf73';
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
      }); */

    const NewsAPI = require("newsapi");
    const newsapi = new NewsAPI("d766bc99f3834102b779f9296aabaf73");
    // To query /v2/top-headlines
    // All options passed to topHeadlines are optional, but you need to include at least one of them
    newsapi.v2
      .topHeadlines({
        sources: "bbc-news,the-verge",
        q: "bitcoin",
        category: "business",
        language: "en",
        country: "us",
      })
      .then((response) => {
        console.log(response);
        /*
    {
      status: "ok",
      articles: [...]
    }
  */
      });
    // To query /v2/everything
    // You must include at least one q, source, or domain
    newsapi.v2
      .everything({
        q: "bitcoin",
        sources: "bbc-news,the-verge",
        domains: "bbc.co.uk, techcrunch.com",
        from: "2017-12-01",
        to: "2017-12-12",
        language: "en",
        sortBy: "relevancy",
        page: 2,
      })
      .then((response) => {
        console.log(response);
        /*
    {
      status: "ok",
      articles: [...]
    }
  */
      });
    // To query sources
    // All options are optional
    newsapi.v2
      .sources({
        category: "technology",
        language: "en",
        country: "us",
      })
      .then((response) => {
        console.log(response);
        /*
    {
      status: "ok",
      sources: [...]
    }
  */
      });
  };

  render() {
    return <News noticias={this.state.noticias} />;
  }
}

export default Blog;
