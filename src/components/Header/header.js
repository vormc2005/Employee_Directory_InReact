import React from "react";
import "./style.css"


function Header(){
  return(
<div className="jumbotron jumbotron-fluid">
  <div className="container">
    <h1 className="display-4 col sm12">Employee Directory</h1>
    <p className="lead">Please use search box to search for a person</p>
  </div>
</div>
  );
}

export default Header;