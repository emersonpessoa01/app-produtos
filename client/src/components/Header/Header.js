import React from "react";
import { Link } from "react-router-dom";

function Header({ filter, onChangeFilter, productCount, totalPrice }) {
  return (
    <div className="promotion-search">
      <header className="promotion-search__header">
        <h3>Promo Show</h3>
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
      <span className="promotion-search__items">
        {productCount > 1 ? "Itens" : "Item"} :{"  "}
        <strong style={{color:"#3498DB"}}>{productCount.toString().padStart(2, "0")}</strong>
      </span>{" "}
      <span style={{color:"#2C3E50"}}>|</span>
      <span className="promotion-search__items">
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
