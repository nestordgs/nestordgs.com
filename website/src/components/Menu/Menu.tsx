import i18n from "i18next";
import { useTranslation } from "react-i18next";
import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTerminal, faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
// import logo from "../../logo.svg";

import sections from "./sections.json";
import { TranslationConext } from "../../translations";
import { SwitchLanguage } from "../SwitchLanguage/SwitchLanguage";
import { useTheme } from "../../hooks/useTheme";

export const Menu = () => {
  const { language, changeLanguage } = useContext(TranslationConext);
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const handleLanguage = () => {
    if (language === "es") {
       changeLanguage("en");
    } else {
       changeLanguage("es");
    }
  };

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white/80 dark:bg-deep-dark/80 backdrop-blur-md border-b border-black/5 dark:border-white/5 supports-[backdrop-filter]:bg-white/50 dark:supports-[backdrop-filter]:bg-deep-dark/50 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <nav className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2" data-testid="logo">
                <span className="font-mono font-bold text-xl tracking-tight text-gray-900 dark:text-white flex items-center gap-2">
                    <FontAwesomeIcon icon={faTerminal} className="text-primary" />
                    nestordgs
                </span>
            </a>

            {/* Desktop Menu - Centered */}
            <div className="hidden md:flex absolute left-1/2 -translate-x-1/2">
                <ul className="flex items-center gap-8 list-none m-0 p-0">
                    {sections.filter(s => s.name !== 'menu.blog').map((section) => (
                        <li key={section.name}>
                            <a 
                                href={section.value}
                                className="text-sm font-semibold text-gray-600 dark:text-gray-200 hover:text-primary dark:hover:text-white hover:font-bold transition-all duration-300"
                            >
                                {t(section.name)}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Language Switch & Theme Toggle - Right */}
            <div className="hidden md:flex items-center gap-4">
                <SwitchLanguage
                    label={`${language.toUpperCase()}`}
                    isChecked={language === "en"}
                    onClick={handleLanguage}
                />
                
                <button
                    onClick={toggleTheme}
                    className="w-10 h-10 rounded-full border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-600 dark:text-white hover:bg-gray-100 dark:hover:bg-white/5 transition-colors"
                    aria-label="Toggle theme"
                >
                    <FontAwesomeIcon 
                        icon={theme === 'dark' ? faSun : faMoon} 
                        className={theme === 'dark' ? 'text-orange-400' : 'text-primary'} 
                    />
                </button>
            </div>

        {/* Mobile Toggle */}
        <button 
            className="md:hidden text-gray-900 dark:text-white"
            onClick={() => setIsOpen(!isOpen)}
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
        </button>

         {/* Mobile Menu Dropdown */}
         { isOpen && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-[#111] border border-black/5 dark:border-white/10 rounded-xl p-4 flex flex-col gap-4 shadow-2xl md:hidden">
                <ul className="flex flex-col gap-4 list-none m-0 p-0">
                    {sections.filter(s => s.name !== 'menu.blog').map((section) => (
                        <li key={section.name}>
                            <a 
                                href={section.value}
                                className="block text-gray-600 dark:text-gray-200 font-semibold hover:text-primary hover:font-bold transition-all duration-300"
                                onClick={() => setIsOpen(false)}
                            >
                                {t(section.name)}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="pt-4 border-t border-black/5 dark:border-white/10 flex items-center justify-between">
                     <SwitchLanguage
                        label={`${language.toUpperCase()}`}
                        isChecked={language === "en"}
                        onClick={handleLanguage}
                    />
                    <button
                        onClick={toggleTheme}
                        className="w-10 h-10 rounded-full border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-600 dark:text-white hover:bg-gray-100 dark:hover:bg-white/5 transition-colors"
                    >
                        <FontAwesomeIcon 
                            icon={theme === 'dark' ? faSun : faMoon} 
                            className={theme === 'dark' ? 'text-orange-400' : 'text-primary'} 
                        />
                    </button>
                </div>
            </div>
         )}
      </nav>
      </div>
    </header>
  );
};
