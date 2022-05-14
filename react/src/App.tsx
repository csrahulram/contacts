import React from "react";
import "./Components/SearchComponent";
import SearchComponent from "./Components/SearchComponent";
function callMe(data: any) {
  console.log(data);
}
function App() {
  return <SearchComponent onClick={callMe}></SearchComponent>;
}

export default App;
