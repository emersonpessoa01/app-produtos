import React, { useEffect, useState } from "react";
import "../../App.css";
import "../../components/Promotion/Card/Card.css";
import "../../components/Promotion/Search/Search.css";
import Header from "components/Header/Header";
import Products from "components/Products/Products";
import api from "../../Api/Api";
import Github from "../../components/img/github.png";
import Linkedin from "../../components/img/linkedin.png";
import Facebook from "../../components/img/facebook.png";
import "../../components/Footer/Footer.css";


const App = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filteredPrice, setFilteredPrice] = useState(0);
  const [filter, setFilter] = useState("");
  // const [load,loadInfo] = useApi({
  //   url:"http://localhost:3002/api/products",

  //   onCompleted:(response)=>{
  //     setAllProducts(response.data)
  //   }
  // });

  useEffect(() => {
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
        maxWidth: 600,
        margin: "30px auto",
      }}
    >
      <Header
        filter={filter}
        productCount={filteredProducts.length}
        totalPrice={filteredPrice}
        onChangeFilter={handleChangeFilter}
      />
      {filteredProducts.length === null ? (
        <div>Carregando...</div>
      ) : (
        <Products products={filteredProducts} />
      )}
      <footer id="footer">
        <div className="social-media">
          <a
            href="https://github.com/emersonpessoa01"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Github} alt="github" className="social-icon" />{" "}
          </a>
          <a
            href="https://www.linkedin.com/feed/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Linkedin} alt="linkedin" className="social-icon" />{" "}
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100005211906450"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Facebook} alt="facebook" className="social-icon" />{" "}
          </a>
        </div>
        <div className="copyrights">
          <p>EPessoa 2021 @ Todos os direitos reservados</p>
        </div>
      </footer>
    </div>
    
  );
};

export default App;
