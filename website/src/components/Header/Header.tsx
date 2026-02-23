import React from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud, faCodeBranch, faLayerGroup, faServer, faDatabase } from "@fortawesome/free-solid-svg-icons";
import { faJs, faHtml5, faCss3Alt } from "@fortawesome/free-brands-svg-icons";
import { HeroCard } from "./HeroCard";

export const Header = () => {
  const { t } = useTranslation();

  return (
    <section className="min-h-[85vh] flex items-center py-10 md:pt-20 md:pb-12 relative bg-gray-50 dark:bg-deep-dark border-b border-black/5 dark:border-white/5 w-full transition-colors duration-300">
        <div className="container max-w-6xl mx-auto px-4 md:px-8 grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="space-y-8">
                <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
                    {t('header.hero.prefix')} <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-500 dark:from-white dark:to-gray-500">{t('header.hero.highlight')}</span> <br />
                    <span className="text-primary">{t('header.hero.suffix')}</span>
                </h1>
                
                <p className="text-gray-600 dark:text-gray-400 text-lg max-w-lg leading-relaxed">
                    {t('header.subtitle')}
                </p>

                <div className="flex flex-wrap gap-4">
                    <a href="#experience" className="px-8 py-3 bg-primary text-white dark:text-dark font-bold rounded-lg hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
                        {t('header.cta_experience')}
                    </a>
                    <a href="#connect" className="px-8 py-3 bg-white dark:bg-white/5 text-gray-900 dark:text-white font-medium rounded-lg border border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/10 transition-colors shadow-sm dark:shadow-none">
                        {t('header.cta_contact')}
                    </a>
                </div>
            </div>

            {/* Right Content - Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative">
                 <HeroCard 
                    icon={faCloud}
                    title={t('header.cards.cloud.title')}
                    desc={t('header.cards.cloud.desc')}
                 />
                 <HeroCard 
                    icon={faServer}
                    title={t('header.cards.financial.title')}
                    desc={t('header.cards.financial.desc')}
                 />
                 <HeroCard 
                    icon={faCodeBranch}
                    title={t('header.cards.apis.title')}
                    desc={t('header.cards.apis.desc')}
                 />
                 <HeroCard 
                    icon={faLayerGroup}
                    title={t('header.cards.outsourcing.title')}
                    desc={t('header.cards.outsourcing.desc')}
                 />
            </div>

        </div>
    </section>
  );
};
