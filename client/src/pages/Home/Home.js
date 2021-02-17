import React, { useEffect, useState } from "react";
import "../../App.css";
import "../../components/Promotion/Card/Card.css";
import "../../components/Promotion/Search/Search.css";
import Header from "components/Header/Header";
import Products from "components/Products/Products";
import api from "../../Api/Api";
import "../../components/Footer/Footer.css";
import Preloader1 from "components/Preloader/Preloader1";
import Items from "components/Item/Items";

const App = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filter, setFilter] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      const getApi = async () => {
        const res = await api.get("/api/products");
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

        setAllProducts(allProducts);
        setFilteredProducts(Object.assign([], allProducts));
        setDone(true);
      };
      getApi();
    }, 2000);
  }, []);

  const handleChangeFilter = (evt) => {
    const newText = evt.target.value;
    setFilter(newText);
    const filterLowerCase = newText.toLowerCase();
    const filteredProducts = allProducts.filter((product) => {
      return product.title.toLowerCase().includes(filterLowerCase);
    });

    console.log(filteredProducts);
    setFilteredProducts(filteredProducts);
  };

  return (
    <div
      className="App"
      style={{
        maxWidth: 600,
        margin: "30px auto",
      }}
    >
      <Header filter={filter} onChangeFilter={handleChangeFilter} />
      {!done ? (
        <Preloader1 />
      ) : filteredProducts.length === 0 ? (
        <Items />
      ) : (
        <Products products={filteredProducts} />
      )}
    </div>
  );
};

export default App;
