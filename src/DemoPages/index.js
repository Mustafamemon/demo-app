import React from "react";
import { Switch, Route ,BrowserRouter as Router, } from "react-router-dom";
import Editablelabel from "./editable-label";
import ModalDropdown from './modal-dropdown'
import ListPages from "./ListPages";

function DemoPages(props) {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={ListPages} />

          <Route path="/editable-label" component={Editablelabel} />
          <Route path="/modal-dropdown" component={ModalDropdown} />
          
        </Switch>
      </Router>
    </div>
  );
}

export default DemoPages;
