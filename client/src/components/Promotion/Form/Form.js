import React, { useEffect, useState } from "react";
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

function PromotionForm({ id }) {
  const [values, setValues] = useState(id ? null : initialValue);
  const history = useHistory();
  // console.log(values);
  console.log(id);

  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:3002/api/products.details/${id}`)
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
      ? `http://localhost:3002/api/products/${id}`
      : "http://localhost:3002/api/products";

    axios[method](url, values).then((response) => {
      history.push("/home");
    });
  };

  // if (!values) {
  //   return <div>Carregando...</div>;
  // }

  return (
    <div
      style={{
        maxWidth: 800,
        margin: "30px auto",
      }}
    >
      <h1 className="promotion-form__title">Promo Show</h1>
      <h2>Nova Promoção</h2>
      {!values ? (
        <div>Nenhum resultado encontrado...</div>
      ) : (
        <form onSubmit={onSubmit}>
          <div className="promotion-form__group">
            <label htmlFor="title">Título:</label>
            <input
              autoFocus
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
          </div>
          <div>
            <button className="button" type="submit">
              Salvar
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default PromotionForm;
