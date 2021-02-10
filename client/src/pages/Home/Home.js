import React, { useEffect, useState } from "react";
import "../../App.css";
import "../../components/Promotion/Card/Card.css";
import axios from "axios";
import { Link } from "react-router-dom";
import "../../components/Promotion/Search/Search.css";

const api = axios.create({
  baseURL: "http",
});

const App = () => {
  const [allCountries, setAllCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    
    const getApi = async () => {
      const res = await api.get("http://localhost:3002/api/products");
      const json = await res.data;

      let allCountries = json.map(
        ({ _id, title, imageUrl, price, comments, url }) => {
          return {
            _id,
            title,
            filterTitle: title.toLowerCase(),
            imageUrl,
            price,
            comments,
            url,
          };
        }
      );
      console.log(allCountries);
      setAllCountries(allCountries);
      setFilteredCountries(Object.assign([], allCountries));
    };
    getApi();
  }, []);

  const handleChangeFilter = (evt) => {
    const newText = evt.target.value;
    setFilter(newText);
    const filterLowerCase = newText.toLowerCase();
    const filteredCountries = allCountries.filter((country) => {
      return country.filterTitle.includes(filterLowerCase);
    });
    console.log(filteredCountries);
    setFilteredCountries(filteredCountries);
  };

  return (
    <div
      className="App"
      style={{
        maxWidth: 800,
        margin: "30px auto",
      }}
    >
      <div className="promotion-search">
        <header className="promotion-search__header">
          <h1>Promo Show</h1>
          <Link to="/create">Nova Promoção</Link>
        </header>
        <input
          autoFocus
          className="promotion-search__input"
          type="search"
          placeholder="Buscar"
          value={filter}
          onChange={handleChangeFilter}
        />
        {allCountries.map((promotion) => {
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
                    {promotion.comments.length > 1
                      ? "Comentários"
                      : "Comentário"}
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
    </div>
  );
};

export default App;
