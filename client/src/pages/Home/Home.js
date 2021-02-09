import React, { useEffect, useState } from "react";
import "../../App.css";
import "../../components/Promotion/Card/Card.css";
import axios from "axios";

const api = axios.create({
  baseURL: "http",
});

const App = () => {
  const [promotions, setPromotions] = useState([]);

  useEffect(() => {
    const getApi = async () => {
      const res = await api.get("http://localhost:3002/api/products");
      const json = await res.data;

      console.log(json);
      setPromotions(json);
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
      {promotions.map((promotion) => {
        return (
          <div className="promotion-card" key={promotion._id}>
            <img
              src={promotion.imageUrl}
              className="promotion-card__image"
              alt={promotion.imageUrl}
            />
            <div className="promotion-card__info">
              <h1 className="promotion-card__title">{promotion.title}</h1>
              <span className="promotion-card__price">
                {promotion.price.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </span>
              <footer className="promotion-card__footer">
                {promotion.comments.length > 0 && (
                  <div className="promotion-card__comment">
                    "{promotion.comments[0].comment}"
                  </div>
                )}
                <div className="promotion-card__comments-count">
                  {promotion.comments.length}{" "}
                  {promotion.comments.length > 1 ? "Comentários" : "Comentário"}
                </div>
                <a
                  href={promotion.url}
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
