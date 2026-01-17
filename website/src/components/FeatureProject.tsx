import React from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

export const FeatureProject = () => {
    const { t } = useTranslation();
    const [expandedImage, setExpandedImage] = React.useState<string | null>(null);

    return (
        <section className="py-10 md:py-20 bg-gray-50 dark:bg-deep-dark w-full transition-colors duration-300" id="projects">
            <div className="max-w-6xl mx-auto md:px-0">
                <div className="flex items-center gap-4 mb-12 px-4">
                    <div className="h-1 w-12 bg-primary rounded-full" />
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-0">{t('feature_project.title')}</h2>
                </div>
                
                <div className="bg-white dark:bg-card backdrop-blur-md border border-gray-200 dark:border-white/10 rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300 mx-4 shadow-lg dark:shadow-none">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        
                        {/* Content */}
                        <div className="p-8 space-y-6 order-2 md:order-1">
                            <div>
                                <span className="text-primary font-bold tracking-wider text-sm">{t('feature_project.category')}</span>
                                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mt-2">{t('feature_project.project_title')}</h3>
                            </div>
                            
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                {t('feature_project.description')}
                            </p>

                            <div className="flex flex-wrap gap-2 text-sm text-gray-600 dark:text-gray-300">
                                {["Vue 3", "AWS CDK", "AWS Lambda", "DynamoDB", "API Gateway", "Serverless", "GitHub Actions", "TypeScript"].map(tech => (
                                    <span key={tech} className="bg-gray-100 dark:bg-white/5 px-3 py-1 rounded-full border border-gray-200 dark:border-white/10">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <a href="https://liftwiz.com" target="_blank" rel="noopener noreferrer" className="justify-center flex items-center gap-2 px-6 py-3 bg-primary text-white dark:text-dark font-bold rounded-lg hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20 bg-primary/90">
                                    <FontAwesomeIcon icon={faExternalLinkAlt} />
                                    {t('feature_project.cta_view')}
                                </a>
                            </div>
                        </div>

                        {/* Image Preview (Gradient Placeholder) */}
                        <div className="h-full min-h-[300px] bg-gradient-to-br from-gray-100 to-gray-200 dark:from-[#111] dark:to-[#222] relative border-l border-gray-200 dark:border-white/5 overflow-hidden group order-1 md:order-2">
                            {/* Abstract shapes or screenshot placeholder */}
                            <div className="absolute inset-0 flex items-center justify-center p-8">
                                <div className="relative w-full h-full flex items-center justify-center">
                                    {/* First Image - Left/Back */}
                                    <div className="absolute left-4 top-1/2 -translate-y-1/2 w-[45%] z-10 transform -rotate-6 transition-transform duration-500 group-hover:rotate-0 group-hover:scale-105 group-hover:z-30 cursor-pointer" onClick={() => setExpandedImage('/liftwiz-mobile-1.png')}>
                                        <img 
                                            src="/liftwiz-mobile-1.png" 
                                            alt="LiftWiz Mobile View 1" 
                                            className="w-full rounded-xl shadow-2xl border-4 border-gray-900/10 dark:border-white/10"
                                        />
                                    </div>

                                    {/* Second Image - Right/Front */}
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 w-[45%] z-20 transform rotate-6 transition-transform duration-500 group-hover:rotate-0 group-hover:scale-105 cursor-pointer" onClick={() => setExpandedImage('/liftwiz-mobile-2.png')}>
                                        <img 
                                            src="/liftwiz-mobile-2.png" 
                                            alt="LiftWiz Mobile View 2" 
                                            className="w-full rounded-xl shadow-2xl border-4 border-gray-900/10 dark:border-white/10"
                                        />
                                    </div>

                                    {/* Glowing effect background */}
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-primary/20 blur-[100px] rounded-full -z-10" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Lightbox Modal */}
            {expandedImage && (
                <div 
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 transition-opacity duration-300"
                    onClick={() => setExpandedImage(null)}
                >
                    <div className="relative max-w-4xl max-h-[90vh] w-full flex items-center justify-center">
                        <img 
                            src={expandedImage} 
                            alt="Expanded view" 
                            className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl"
                        />
                        <button 
                            className="absolute top-4 right-4 text-white text-xl bg-black/50 w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                            onClick={() => setExpandedImage(null)}
                        >
                            ✕
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};
