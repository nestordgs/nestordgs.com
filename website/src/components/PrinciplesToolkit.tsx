import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faTerminal, faDatabase, faMicrochip, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faAws, faDocker, faNodeJs } from "@fortawesome/free-brands-svg-icons";

export const PrinciplesToolkit = () => {
    const { t } = useTranslation();

    return (
        <section className="py-20 bg-deep-dark- w-full" id="profile">
            <div className="max-w-6xl mx-auto md:px-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 px-4">
                    
                    {/* Left Column: Philosophy & Bio */}
                    <div className="flex flex-col justify-center space-y-12">
                        <div className="space-y-6">
                            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                                {t("principles.title")}
                            </h2>
                            <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
                            {t("principles.description")}
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest">{t("principles.education.title")}</h3>
                            <div className="bg-white/5 border border-white/10 rounded-xl p-6 flex items-start gap-4 hover:border-primary/30 transition-colors group">
                                <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:scale-110 transition-transform duration-300">
                                    <FontAwesomeIcon icon={faGraduationCap} className="text-xl" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-white">{t("principles.education.degree")}</h4>
                                    <p className="text-gray-400 text-sm mt-1">{t("principles.education.university")}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Toolkit Bento Grid */}
                    <div className="grid grid-cols-2 gap-4">
                        {/* Frontend Mastery - Large Block */}
                        <div className="col-span-2 bg-dark-lighter border border-white/5 p-6 rounded-2xl relative overflow-hidden group hover:border-primary/30 transition-all">
                            <div className="absolute top-0 right-0 p-32 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-all" />
                            <div className="relative z-10">
                                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center text-primary mb-4">
                                    <FontAwesomeIcon icon={faCode} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{t("principles.toolkit.frontend.title")}</h3>
                                <p className="text-gray-400 text-sm">{t("principles.toolkit.frontend.desc")}</p>
                            </div>
                        </div>

                        {/* Tech Stack Small Blocks */}
                        <div className="bg-dark-lighter border border-white/5 p-6 rounded-2xl flex flex-col items-center justify-center gap-3 hover:border-primary/30 transition-all group">
                            <FontAwesomeIcon icon={faNodeJs} className="text-3xl text-green-500 group-hover:scale-110 transition-transform" />
                            <span className="text-gray-300 font-medium text-sm">Node.js</span>
                        </div>
                        <div className="bg-dark-lighter border border-white/5 p-6 rounded-2xl flex flex-col items-center justify-center gap-3 hover:border-primary/30 transition-all group">
                            <FontAwesomeIcon icon={faAws} className="text-3xl text-orange-500 group-hover:scale-110 transition-transform" />
                            <span className="text-gray-300 font-medium text-sm">AWS</span>
                        </div>
                        <div className="bg-dark-lighter border border-white/5 p-6 rounded-2xl flex flex-col items-center justify-center gap-3 hover:border-primary/30 transition-all group">
                            <FontAwesomeIcon icon={faDatabase} className="text-3xl text-blue-400 group-hover:scale-110 transition-transform" />
                            <span className="text-gray-300 font-medium text-sm">SQL</span>
                        </div>
                        <div className="bg-dark-lighter border border-white/5 p-6 rounded-2xl flex flex-col items-center justify-center gap-3 hover:border-primary/30 transition-all group">
                            <FontAwesomeIcon icon={faDocker} className="text-3xl text-blue-500 group-hover:scale-110 transition-transform" />
                            <span className="text-gray-300 font-medium text-sm">Docker</span>
                        </div>

                        {/* Current Focus - Wide Block */}
                        <div className="col-span-2 bg-primary text-dark p-6 rounded-2xl relative overflow-hidden flex items-center justify-between group">
                            <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-dark opacity-100" />
                            <div className="absolute -bottom-8 -right-8 text-9xl opacity-10 rotate-12">
                                <FontAwesomeIcon icon={faMicrochip} />
                            </div>
                            
                            <div className="relative z-10">
                                <h4 className="text-xs font-bold uppercase tracking-widest opacity-70 mb-1">{t("principles.toolkit.focus.title")}</h4>
                                <h3 className="text-2xl font-bold tracking-tight">{t("principles.toolkit.focus.topic")}</h3>
                            </div>
                            
                            <div className="relative z-10 w-12 h-12 bg-black/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                <FontAwesomeIcon icon={faMicrochip} className="text-2xl opacity-80" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
