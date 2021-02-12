import React from "react";
import "../../Promotion/Form/Form.css"

function PromotionForm() {
  return (
    <div
      style={{
        maxWidth: 800,
        margin: "30px auto",
        // textAlign: "center",
      }}
    >
      <h1>Promo Show</h1>
      <h2>Nova Promoção</h2>

      <form>
       <div className="promotion-form__group">
        <label htmlFor="title">Título:</label>
        <input id="title" name="title" type="text"/>

        <label htmlFor="url">Link:</label>
        <input id="url" name="url" type="text"/>

        <label htmlFor="imageUrl">Imagem(url):</label>
        <input id="imageUr" name="imageUr" type="text"/>

        <label htmlFor="price">Preço:</label>
        <input id="price" name="price" type="number"/>
       </div>
       <div>
         <button type="submit">Salvar</button>
       </div>
      </form>
    </div>
  );
}

export default PromotionForm;
