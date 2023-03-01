import React from "react";
import { Menu } from "./components/Menu/Menu";
import { TranslationProvider } from "./translations";
import { Header } from "./components/Header/Header";
import { Aptitudes } from "./components/Aptitudes/Aptitudes";

function App() {
  return (
    <TranslationProvider>
      <Menu />
      <Header />
      <Aptitudes />
    </TranslationProvider>
  );
}

export default App;
