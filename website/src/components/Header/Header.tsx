import React from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud, faCodeBranch, faLayerGroup, faServer, faDatabase } from "@fortawesome/free-solid-svg-icons";
import { faJs, faHtml5, faCss3Alt } from "@fortawesome/free-brands-svg-icons";

const HeroCard = ({ icon, title, desc }: { icon: any, title: string, desc: string }) => (
  <div className="bg-white dark:bg-card backdrop-blur-md border border-gray-200 dark:border-white/10 p-6 rounded-2xl hover:border-primary/50 transition-all duration-300 group h-full shadow-lg dark:shadow-none">
    <div className="w-10 h-10 bg-primary/10 dark:bg-primary/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 dark:group-hover:bg-primary/30 transition-colors">
      <FontAwesomeIcon icon={icon} className="text-primary text-xl" />
    </div>
    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{desc}</p>
  </div>
);

export const Header = () => {
  const { t } = useTranslation();

  return (
    <section className="min-h-[85vh] flex items-center py-10 md:py-20 relative bg-gray-50 dark:bg-deep-dark border-b border-black/5 dark:border-white/5 w-full transition-colors duration-300">
        <div className="container max-w-6xl mx-auto px-4 md:px-8 grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="space-y-8">
                <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
                    Engineering <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-500 dark:from-white dark:to-gray-500">Scalable</span> <br />
                    <span className="text-primary">Technical Architectures</span>
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

                <div className="flex items-center gap-6 pt-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
                     <FontAwesomeIcon icon={faJs} className="text-xl hover:text-[#F7DF1E] transition-colors" title="JavaScript" />
                     <FontAwesomeIcon icon={faHtml5} className="text-xl hover:text-[#E34F26] transition-colors" title="HTML5" />
                     <FontAwesomeIcon icon={faCss3Alt} className="text-xl hover:text-[#1572B6] transition-colors" title="CSS3" />
                     <FontAwesomeIcon icon={faDatabase} className="text-xl hover:text-gray-900 dark:hover:text-white transition-colors" title="Database" />
                     <div className="flex items-center gap-2 border border-black/10 dark:border-white/20 px-3 py-1 rounded text-xs font-mono text-gray-500 dark:text-gray-400">
                        <FontAwesomeIcon icon={faServer} className="text-[10px]" />
                        System Design
                     </div>
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
