import React from "react";
import { MainContent } from "./components/content/MainContent";
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/Footer";

function App() {
  return (
    <div className={"App bg-zinc-800"}>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
