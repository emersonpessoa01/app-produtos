import React, { useEffect, useState } from "react";
import "../../Promotion/Form/Form.css";
import { useHistory } from "react-router-dom";
import api from "../../../Api/Api"

const initialValue = [
  {
    title: "",
    imageUrl: "",
    price: "",
    url: "",
    amount: "",
  },
];

function PromotionForm({ id }) {
  const [values, setValues] = useState(id ? null : initialValue);
  const history = useHistory();
  // console.log(values);
  // console.log(id);

  useEffect(() => {
    if (id) {
      api
        .get(`/api/products.details/${id}`)
        .then((response) => {
          console.log(response.data);
          setValues(response.data);
        });
    }
  }, [id]);

  const onChange = (evt) => {
    const { name, value } = evt.target;
    console.log({ name, value });
    setValues({ ...values, [name]: value });
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    const method = id ? "put" : "post";
    const url = id
      ? `/api/products/${id}`
      : "/api/products";

    api[method](url, values).then((response) => {
      history.push("/home");
    });
  };

  // if (!values) {
  //   return <div>Carregando...</div>;
  // }

  return (
    <div
      style={{
        maxWidth: 600,
        margin: "30px auto",
      }}
    >
      <h1 className="promotion-form__title">Promo Show</h1>
      {!values ? (
        <div>Carregando...</div>
      ) : (
        <div>
          <form onSubmit={onSubmit}>
            <div className="promotion-form__group">
              <label htmlFor="title">Título:</label>
              <input
                autoFocus
                className="promotion-form__input"
                id="title"
                name="title"
                type="text"
                onChange={onChange}
                value={values.title}
              />

              <label htmlFor="url">Link:</label>
              <input
                id="url"
                name="url"
                type="text"
                onChange={onChange}
                value={values.url}
              />

              <label htmlFor="imageUrl">Imagem(url):</label>
              <input
                id="imageUrl"
                name="imageUrl"
                type="text"
                onChange={onChange}
                value={values.imageUrl}
              />

              <label htmlFor="price">Preço:</label>
              <input
                id="price"
                name="price"
                type="number"
                min="0.0"
                step="0.01"
                onChange={onChange}
                value={values.price}
              />
              <label htmlFor="amount">Quantidade:</label>
              <input
                id="amount"
                name="amount"
                type="amount"
                onChange={onChange}
                value={values.amount}
              />
            </div>
            <div>
              <button className="button" type="submit">
                Salvar
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default PromotionForm;
