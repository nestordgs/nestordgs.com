import React from "react";
import { Menu } from "./components/Menu/Menu";
import { TranslationProvider } from "./translations";
import { Header } from "./components/Header/Header";
import { Experiences } from "./components/Experiences";

import { Footer } from "./components/Footer/Footer";


import { FeatureProject } from "./components/FeatureProject";
import { PrinciplesToolkit } from "./components/PrinciplesToolkit";

function App() {
  return (
    <TranslationProvider>
      <div className="min-h-screen bg-white dark:bg-dark text-gray-900 dark:text-white selection:bg-primary selection:text-white overflow-hidden transition-colors duration-300">
        <Menu />
        <main>
          <Header />
          <Experiences />
          <FeatureProject />
          <PrinciplesToolkit />
        </main>
        <Footer />
      </div>
    </TranslationProvider>
  );
}


export default App;
