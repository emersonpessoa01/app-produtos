import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import PagesPromotionEdit from "./Promotion/Edit/Edit"
import PagesPromotionSearch from "./Promotion/Search/Search"
import Home from './Home/Home'
const Root=()=>{
  return (
    <Router>
      <Switch>
        <Route path="/edit/:id" exact component={PagesPromotionEdit} />
        <Route path="/search" exact component={PagesPromotionSearch} />
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  )
}

export default Root