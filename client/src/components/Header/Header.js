import React from "react";
import { Link } from "react-router-dom";

function Header({ filter, onChangeFilter, productCount, totalPrice }) {
  return (
    <div className="promotion-search">
      <header className="promotion-search__header">
        <h3 className="promotion-search__h3">Promo Show</h3>
        <Link to="/create" className="promotion-search__link">Nova Promoção</Link>
      </header>
      <input
        autoFocus
        className="promotion-search__input"
        type="search"
        placeholder="Buscar"
        value={filter}
        onChange={onChangeFilter}
      />
    </div>
  );
}

export default Header;
