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
        {productCount > 1 ? "Produtos" : "Produto"} :{"  "}
        <strong>{productCount.toString().padStart(2, "0")}</strong>
      </span>{" "} | {" "}
      <span>Soma dos preços:{totalPrice}</span>
    </div>
  );
}

export default Header;
