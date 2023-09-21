import React from "react";

const New = (props) => {
  const { url, author, title, image, content } = props.noticia;

  return (
    
      <div class="news-container">
        <div class="news-item">
          <img src={image} alt={title} class="new-image" />
          <span class="new-author">{author}</span>
          <h5 class="new-title">{title}</h5>
          <p class="new-content">{content}</p>
          <a href={url} class="new-link">
            Read more
          </a>
        </div>
      </div>
    
  );
};

export default New;
