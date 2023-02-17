import React from "react";
import { Menu } from "./components/Menu/Menu";
import { TranslationProvider } from "./translations";
import { Header } from "./components/Header/Header";

function App() {
  return (
    <TranslationProvider>
      <Menu />
      <Header />
    </TranslationProvider>
  );
}

export default App;
