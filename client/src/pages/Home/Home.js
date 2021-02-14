import React, { useEffect, useState } from "react";
import "../../App.css";
import "../../components/Promotion/Card/Card.css";
import axios from "axios";
import "../../components/Promotion/Search/Search.css";
import Header from "components/Header/Header";
import Products from "components/Products/Products";

const api = axios.create({
  baseURL: "http",
});

const App = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filteredPrice, setFilteredPrice] = useState(0);
  const [filter, setFilter] = useState("");
  // const [load,loadInfo] = useApi({
  //   url:"http://localhost:3002/api/products",

  //   onCmpleted:(response)=>{
  //     setAllProducts(response.data)
  //   }
  // });

  useEffect(() => {
    const getApi = async () => {
      const res = await api.get("http://localhost:3002/api/products");
      const json = await res.data;

      let allProducts = json
        .map(({ title, price, imageUrl, url, comments, _id }) => {
          return {
            title,
            price,
            imageUrl,
            url,
            comments,
            _id,
          };
        })
        .sort((a, b) => {
          return a.title.localeCompare(b.title);
        });
      console.log(allProducts);

      const filteredPrice = allProducts.reduce((accumulator, current) => {
        return accumulator + current.price;
      }, 0);

      setAllProducts(allProducts);
      setFilteredProducts(Object.assign([], allProducts));
      setFilteredPrice(filteredPrice);
    };
    getApi();
    // load();
  }, []);

  const handleChangeFilter = (evt) => {
    const newText = evt.target.value;
    setFilter(newText);
    const filterLowerCase = newText.toLowerCase();
    const filteredProducts = allProducts.filter((product) => {
      return product.title.toLowerCase().includes(filterLowerCase);
    });

    const filteredPrice = filteredProducts.reduce((accumulator, current) => {
      return accumulator + current.price;
    }, 0);

    console.log(filteredProducts);
    setFilteredProducts(filteredProducts);
    setFilteredPrice(filteredPrice);
  };

  return (
    <div
      className="App"
      style={{
        maxWidth: 800,
        margin: "30px auto",
      }}
    >
      <Header
        filter={filter}
        productCount={filteredProducts.length}
        totalPrice={filteredPrice}
        onChangeFilter={handleChangeFilter}
      />
      {filteredProducts.length === 0 ? (
        <div>Nenhum item encontrado...</div>
      ) : filteredProducts.length === null ? (
        <div>Carregando...</div>
      ) : (
        <Products products={filteredProducts} />
      )}
    </div>
  );
};

export default App;
