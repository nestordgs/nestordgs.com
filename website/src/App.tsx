import React from "react";
import { Header } from "./components/Header/Header";
import { TranslationProvider } from "./translations";

function App() {
  return (
    <TranslationProvider>
      <div>
        <Header />
      </div>
    </TranslationProvider>
  );
}

export default App;
