import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { productsState } from "./model/atoms";
import { ProductList } from "./components/content/Products-List";
import { MainContent } from "./components/content/MainContent";

function App() {
  return (
    <div className={"App bg-slate-300"}>
      <MainContent />
    </div>
  );
}

export default App;
