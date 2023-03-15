import React from "react";
import { Menu } from "./components/Menu/Menu";
import { TranslationProvider } from "./translations";
import { Header } from "./components/Header/Header";
import { Aptitudes } from "./components/Aptitudes/Aptitudes";
import { Experiences } from "./components/Experiences";
import { Studies } from "./components/Studies/Studies";

function App() {
  return (
    <TranslationProvider>
      <Menu />
      <Header />
      <Aptitudes />
      <Experiences />
      <Studies />
    </TranslationProvider>
  );
}

export default App;
