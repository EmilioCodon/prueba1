import React, { Component } from "react";

import New from "./new";

class News extends Component {
  

  render() {
    return (
      <div className="azul3">
       <div className="nameUS">
        <h3 className="custom-title2">US Tech News Hub</h3>
        </div> 
        <div className="detres">
        {this.props.noticias.map(noticia =>
            <New 
            key={noticia.url}
            noticia={noticia}
            />
            
            )}
           </div>
      </div>
    );
  }
}

export default News;
