import React, { useState } from "react";
import "../../components/Promotion/Card/Card.css";
import { Link } from "react-router-dom";
import UIModal from "../../components/UI/Modal/Modal";

function Products({ products }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  console.log(isModalOpen);

  return (
    <div className="promotion-card__main">
      {products.map((product) => {
        return (
          <div className="promotion-card" key={product.title}>
            <img
              src={product.imageUrl}
              className="promotion-card__image"
              alt={product.imageUrl}
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
                <button
                  className="promotion-card__comments-count"
                  onClick={() => setIsModalOpen(product._id)}
                >
                  {product.comments.length}{" "}
                  {product.comments.length > 1 ? "Comentários" : "Comentário"}
                </button>
              </footer>
            </div>
            <div className="promotion-card__divImage">
              <a
                href={product.url}
                target="_blank"
                className="promotion-card__link"
                rel="noopener noreferrer"
              >
                Visitar site
              </a>
              <Link
                className="promotion-card__link"
                to={`/edit/${product._id}`}
              >
                <i className="fas fa-pen"></i>
              </Link>
            </div>
          </div>
        );
      })}
      {isModalOpen ? (
        <UIModal>
          <h1>Comentários</h1>
        </UIModal>
      ) : null}
    </div>
  );
}

export default Products;
