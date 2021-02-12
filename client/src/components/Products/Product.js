import React, { Component } from "react";
import "../../components/Promotion/Card/Card.css"


export default class Product extends Component {
  render() {
    const { imageUrl, title, price, comments, url } = this.props.product;

    return (
      <div className="promotion-card" >
        <img src={imageUrl} className="promotion-card__image" alt={imageUrl} />
        <div className="promotion-card__info">
          <h1 className="promotion-card__title">{title}</h1>
          <span className="promotion-card__price">
            {price.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
          <footer className="promotion-card__footer">
            {comments.length > 0 && (
              <div className="promotion-card__comment">
                "{comments[0].comment}"
              </div>
            )}
            <div className="promotion-card__comments-count">
              {comments.length}{" "}
              {comments.length > 1 ? "Comentários" : "Comentário"}
            </div>
            <a
              href={url}
              target="_blank"
              className="promotion-card__link"
              rel="noopener noreferrer"
            >
              IR PARA O SITE
            </a>
          </footer>
        </div>
      </div>
    );
  }
}
