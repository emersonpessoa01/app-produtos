import React from "react";
import { Link } from "react-router-dom";

function Header({ filter, onChangeFilter, productCount, totalPrice }) {
  return (
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
        onChange={onChangeFilter}
      />
      <span>
        {productCount > 1 ? "Quantidade de produtos" : "Quantidade de produto"} :{"  "}
        <strong style={{color:"#3498DB"}}>{productCount.toString().padStart(2, "0")}</strong>
      </span>{" "}
      <span style={{color:"#2C3E50"}}>|</span>{" "}
      <span>
        Soma dos preços:
        <strong style={{color:"#3498DB"}}>{" "}
          {totalPrice.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </strong>
      </span>
    </div>
  );
}

export default Header;