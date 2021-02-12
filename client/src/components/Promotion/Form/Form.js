import React, { useState } from "react";
import "../../Promotion/Form/Form.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

const initialValue = [
  {
    title: "",
    imageUrl: "",
    price: "",
    url: "",
  },
];

function PromotionForm() {
  const [values, setValues] = useState(initialValue);
  const history = useHistory();
  // console.log(values)

  const onChange = (evt) => {
    const { name, value } = evt.target;
    // console.log({name, value})
    setValues({ ...values, [name]: value });
  };

  const onSubmit = (evt) => {
    evt.preventDefault();

    axios
      .post("http://localhost:3002/api/products", values)
      .then((response) => {
          history.push("/home");
      });
  };

  return (
    <div
      style={{
        maxWidth: 800,
        margin: "30px auto",
      }}
    >
      <h1 className="promotion-form__title">Promo Show</h1>
      <h2>Nova Promoção</h2>

      <form onSubmit={onSubmit}>
        <div className="promotion-form__group">
          <label htmlFor="title">Título:</label>
          <input
            autoFocus
            id="title"
            name="title"
            type="text"
            onChange={onChange}
          />

          <label htmlFor="url">Link:</label>
          <input id="url" name="url" type="text" onChange={onChange} />

          <label htmlFor="imageUrl">Imagem(url):</label>
          <input
            id="imageUrl"
            name="imageUrl"
            type="text"
            onChange={onChange}
          />

          <label htmlFor="price">Preço:</label>
          <input
            id="price"
            name="price"
            type="number"
            min="0.0"
            step="0.01"
            onChange={onChange}
          />
        </div>
        <div>
          <button className="button" type="submit">
            Salvar
          </button>
        </div>
      </form>
    </div>
  );
}

export default PromotionForm;
