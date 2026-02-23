import React from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

interface IExperience {
  dateFrom: string;
  dateTo?: string; // Optional for current job
  title: string;
  company: string;
  description: string;
  tags?: string[]; // Optional tech stack tags
}

export const Experiences = () => {
  const { t } = useTranslation();
  const [showAll, setShowAll] = React.useState(false);
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  const prevShowAll = React.useRef(showAll);

  React.useEffect(() => {
    if (prevShowAll.current && !showAll && buttonRef.current) {
      buttonRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    prevShowAll.current = showAll;
  }, [showAll]);

  const experiences: IExperience[] = [
    {
      dateFrom: "2022",
      dateTo: "Present",
      title: "experiences.jobs.tw.title",
      company: "experiences.jobs.tw.company",
      description: "experiences.tw",
      tags: ["NestJS", "React", "Kafka", "GCP", "Firestore", "GitHub Actions", "CI/CD"]
    },
    {
        dateFrom: "2021",
        dateTo: "2022",
        title: "experiences.jobs.option.title",
        company: "experiences.jobs.option.company",
        description: "experiences.option",
        tags: ["React", "Python", "Flask", "Docker", "AWS", "Data Visualization", "REST API"]
    },
    {
        dateFrom: "2019",
        dateTo: "2021",
        company: "experiences.jobs.arkho.company",
        title: "experiences.jobs.arkho.title",
        description: "experiences.arkho",
        tags: ["AWS", "AWS Lambda", "AWS Glue", "AWS Athena", "Angular", "Serverless", "ETL", "Elasticsearch"]
    },
    {
        dateFrom: "2019",
        dateTo: "2019",
        company: "experiences.jobs.karibu.company",
        title: "experiences.jobs.karibu.title",
        description: "experiences.karibu",
        tags: ["Nuxt.js", "Vue.js", "Node.js", "GCP", "Firebase", "Express", "NoSQL"]
    },
    {
        dateFrom: "2014",
        dateTo: "2019",
        company: "Early Career & Foundations",
        title: "experiences.jobs.early_career.title",
        description: "experiences.early_career",
        tags: ["Vue.js", "Node.js", "PHP", "Laravel", "MySQL", "ThreeJS", "JavaScript"]
    },
  ];

  const visibleExperiences = showAll ? experiences : experiences.slice(0, 3);

  return (
    <section className="py-10 md:py-20 bg-white dark:bg-dark w-full transition-colors duration-300" id="experience">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col gap-2 mb-8">
            <div className="flex items-center gap-4">
                    <div className="h-1 w-12 bg-primary rounded-full" />
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-0">{t("experiences.title")}</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-400 ml-16 max-w-2xl">{t("experiences.subtitle")}</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12 ml-4 md:ml-0">
            {[
                { value: 'experiences.stats.exp.value' },
                { value: 'experiences.stats.teams.value' },
                { value: 'experiences.stats.impact.value' },
                { value: 'experiences.stats.focus.value' }
            ].map((stat, i) => (
                <div key={i} className="bg-gray-50 dark:bg-card/50 border border-black/5 dark:border-white/5 p-4 rounded-lg flex flex-col justify-center h-24 hover:bg-gray-100 dark:hover:bg-card/80 transition-colors">
                    <span className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">{t(stat.value)}</span>
                </div>
            ))}
        </div>

        <div className="relative space-y-12">
            {/* Main Vertical Line */}
            <div className="absolute left-[130px] md:left-[220px] top-4 bottom-4 w-px bg-black/10 dark:bg-white/10 hidden md:block" />

            {visibleExperiences.map((exp, index) => (
                <div key={`${index}-${exp.title}`} className="flex flex-col md:grid md:grid-cols-[220px_1fr] gap-8 relative group">
                    {/* Left Column: Date (Desktop Only) */}
                    <div className="hidden md:block text-right pt-2 pr-12 relative">
                        <div className="text-gray-500 dark:text-gray-400 font-mono font-medium text-base">
                        {exp.dateFrom} — {exp.dateTo === 'Present' ? t('experiences.present') : exp.dateTo}
                        </div>
                        {index === 0 && (
                            <div className="text-primary dark:text-primary font-bold mt-1 uppercase tracking-wider" style={{fontSize: '0.65rem'}}>
                                {t('experiences.actual')} Role
                            </div>
                        )}
                    </div>

                    {/* Timeline Dot (Desktop Only) */}
                    <div className={`hidden md:block absolute left-[220px] -translate-x-1/2 top-3 w-4 h-4 rounded-full border-2 z-10 box-content transition-all duration-300 ${
                        index === 0 
                        ? 'bg-white dark:bg-dark border-primary ring-4 ring-primary/20 shadow-[0_0_15px_rgba(0,199,177,0.4)]' 
                        : 'bg-white dark:bg-dark border-gray-300 dark:border-gray-600 group-hover:border-primary group-hover:scale-125'
                    }`} />
                    
                    {/* Right Column: Content Card */}
                    <div className="bg-white dark:bg-card backdrop-blur-sm border border-gray-200 dark:border-white/10 p-6 rounded-xl hover:border-primary/30 transition-all duration-300 relative shadow-sm dark:shadow-none">
                        
                        {/* Mobile Date & Role (Visible only on mobile) */}
                        <div className="md:hidden mb-4 border-b border-black/5 dark:border-white/5 pb-4">
                            <div className="flex items-center justify-between">
                                <span className="text-primary text-sm font-mono font-bold">
                                    {exp.dateFrom} — {exp.dateTo === 'Present' ? t('experiences.present') : exp.dateTo}
                                </span>
                                {index === 0 && (
                                    <span className="bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider border border-primary/20">
                                        {t('experiences.actual')} Role
                                    </span>
                                )}
                            </div>
                        </div>

                        <div className="flex flex-col mb-4 gap-1">
                            <div className="flex justify-between items-start">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary transition-colors">{t(exp.title)}</h3>
                            </div>
                            <h4 className="text-lg text-gray-600 dark:text-gray-400 font-medium">{t(exp.company)}</h4>
                        </div>
                        
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 text-sm md:text-base whitespace-pre-line">
                            {t(exp.description)}
                        </p>

                        {exp.tags && (
                            <div className="flex flex-wrap gap-2">
                                {exp.tags.map(tag => (
                                    <span key={tag} className="text-xs font-semibold text-primary dark:text-primary/80 bg-primary/10 dark:bg-primary/5 px-3 py-1.5 rounded-full border border-primary/30 dark:border-primary/10">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>

        <div className="flex justify-center mt-12 pl-4 md:pl-12">
            <button 
                ref={buttonRef}
                onClick={() => setShowAll(!showAll)}
                className="flex items-center gap-2 px-8 py-3 bg-gray-100 dark:bg-white/5 text-gray-900 dark:text-white font-medium rounded-lg border border-gray-200 dark:border-white/10 hover:bg-gray-200 dark:hover:bg-white/10 hover:text-primary dark:hover:text-primary hover:border-primary/30 transition-all group hover:cursor-pointer"
            >
                <span>{showAll ? t('experiences.view_less') : t('experiences.view_more')}</span>
                <FontAwesomeIcon 
                    icon={showAll ? faChevronUp : faChevronDown} 
                    className={`text-sm transition-transform duration-300 ${showAll ? '' : 'group-hover:translate-y-1'}`}
                />
            </button>
        </div>
      </div>
    </section>
  );
};
