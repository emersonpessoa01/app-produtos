import React, { useEffect, useState } from "react";
import "./App.css";
import "../src/components/Promotion/Card/Card.css";
import axios from "axios";

const api = axios.create({
  baseURL: "http",
});

const App = () => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    const getApi = async () => {
      const res = await api.get("http://localhost:3002/api/products");
      const json = await res.data;

      console.log(json);
      setAllProducts(json);
    };
    getApi();
  }, []);

  return (
    <div
      className="App"
      style={{
        maxWidth: 800,
        margin: "30px auto",
      }}
    >
      {allProducts.map((product) => {
        return (
          <div className="promotion-card" key={product._id}>
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
};

export default App;
