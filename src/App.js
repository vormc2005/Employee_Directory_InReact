import React from 'react';
import './App.css';
import SearchResultsContainer from "./components/Search/SearchResultContainer"
import Header from "../src/components/Header/header"
import Wrapper from "../src/components/Wrapper/index"





function App() {
  return (
    
    <Wrapper>
     <Header/>
    <SearchResultsContainer/>

    </Wrapper>
  );
}

export default App;
