import React from "react";
import { Header } from "./components/Header/Header";
import { TranslationProvider } from "./translations";
import Grid from "animated-grid-lines";
import {
  gradientFive,
  gradientFour,
  gradientOne,
  gradientThree,
  gradientTwo,
  gridHeaderColor,
} from "./constants";

function App() {
  const grandients: string[] = [
    gradientOne,
    gradientTwo,
    gradientThree,
    gradientFour,
    gradientFive,
  ];

  return (
    <TranslationProvider>
      <Header />
      <div style={{ height: 648 }}>
        <Grid colors={grandients} gridColor={gridHeaderColor} />
      </div>
    </TranslationProvider>
  );
}

export default App;
