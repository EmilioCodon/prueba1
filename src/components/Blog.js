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

   let url ="https://gnews.io/api/v4/top-headlines?category=technology&lang=en&apikey=9e599b5dacaf1b9993e0d8a73a3b1741";
    /* 
      let url = 'https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=10&apikey='; */
    /*    let url = '/api/news';    */
    fetch(url)
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((noticias) => {
        console.log(noticias);
        this.setState({
          noticias: noticias.articles,
        });
      });
  };

  render() {
    return <News noticias={this.state.noticias} />;
  }
}

export default Blog;
