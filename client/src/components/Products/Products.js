import React from "react";
// import "../Products/Product";
import "../../components/Promotion/Card/Card.css"

function Products({ products }) {
  return (
    <div>
      {products.map((product) => {
        return (
          <div className="promotion-card" key={product._id}>
            <img
              src={product.imageUrl}
              className="promotion-card__image"
              alt={product.title}
            />
            <div className="promotion-card__info">
              <h1 className="promotion-card__title">{product.title}</h1>
              <span className="promotion-card__price">
                {product.price.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </span>
              <footer className="promotion-card__footer">
                {product.comments.length > 0 && (
                  <div className="promotion-card__comment">
                    "{product.comments[0].comment}"
                  </div>
                )}
                <div className="promotion-card__comments-count">
                  {product.comments.length}{" "}
                  {product.comments.length > 1 ? "Comentários" : "Comentário"}
                </div>
                <a
                  href={product.url}
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
      })}
    </div>
  );
}

export default Products;
