import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PagesPromotionEdit from "./Promotion/Edit/Edit";
import PagesPromotionSearch from "./Promotion/Search/Search";
import Home from "./Home/Home";
import "./Root.css"
import Footer from "components/Footer/Footer";

const Root = () => {
  return (
    <div>
        <nav id="nav">
          <a href="/home">Home</a>
          <a href="#about">Sobre</a>
          <a href="#job-experiences">Produtos</a>
          <a href="#footer">Contato</a>
        </nav>
      <Router>
        <Switch>
          <Route path="/edit/:id" exact component={PagesPromotionEdit} />
          <Route path="/create" exact component={PagesPromotionSearch} />
          <Route path="/home" exact component={Home} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default Root;
