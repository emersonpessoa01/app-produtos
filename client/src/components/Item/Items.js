import React from "react";
import "../Item/Items.css";

function Items() {
  return (
    <div className="item-items">
      <div>
        <h1 className="item-items__title">
          {" "}
          <i className="fas fa-search fa-2x"></i>
        </h1>
        <span className="item-items__span">Nenhum item encontrado.</span>
      </div>
    </div>
  );
}

export default Items;
