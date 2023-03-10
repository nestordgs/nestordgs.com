import React from "react";
import { Menu } from "./components/Menu/Menu";
import { TranslationProvider } from "./translations";
import { Header } from "./components/Header/Header";
import { Aptitudes } from "./components/Aptitudes/Aptitudes";
import { Experiences } from "./components/Experiences";

function App() {
  return (
    <TranslationProvider>
      <Menu />
      <Header />
      <Aptitudes />
      <Experiences />
    </TranslationProvider>
  );
}

export default App;
