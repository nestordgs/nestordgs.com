import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

export const FeatureProject = () => {
    return (
        <section className="py-10 md:py-20 bg-gray-50 dark:bg-deep-dark w-full transition-colors duration-300" id="projects">
            <div className="max-w-6xl mx-auto md:px-0">
                <div className="flex items-center gap-4 mb-12 px-4">
                    <div className="h-1 w-12 bg-primary rounded-full" />
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-0">Featured Project</h2>
                </div>
                
                <div className="bg-white dark:bg-card backdrop-blur-md border border-gray-200 dark:border-white/10 rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300 mx-4 shadow-lg dark:shadow-none">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        
                        {/* Content */}
                        <div className="p-8 space-y-6 order-2 md:order-1">
                            <div>
                                <span className="text-primary font-bold tracking-wider text-sm">DESIGN SYSTEM & TEMPLATE</span>
                                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mt-2">SaaS Starter Kit & UI Library</h3>
                            </div>
                            
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                A comprehensive starting point for SaaS applications. Built with modern technologies to ensure scalability and developer experience. Includes authentication, payments integration, and a rich set of UI components tailored for dark mode.
                            </p>

                            <div className="flex flex-wrap gap-2 text-sm text-gray-600 dark:text-gray-300">
                                {['Next.js', 'React', 'Tailwind CSS', 'TypeScript', 'Prisma'].map(tech => (
                                    <span key={tech} className="bg-gray-100 dark:bg-white/5 px-3 py-1 rounded-full border border-gray-200 dark:border-white/10">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                                <button className="flex items-center gap-2 px-6 py-3 bg-primary text-white dark:text-dark font-bold rounded-lg hover:bg-primary/90 transition-colors pointer-events-none opacity-80">
                                    <FontAwesomeIcon icon={faExternalLinkAlt} />
                                    View Project
                                </button>
                                <button className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-white/5 text-gray-900 dark:text-white font-medium rounded-lg border border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/10 transition-colors pointer-events-none opacity-80 shadow-sm dark:shadow-none">
                                    <FontAwesomeIcon icon={faGithub} />
                                    Source Code
                                </button>
                        </div>

                        {/* Image Preview (Gradient Placeholder) */}
                        <div className="h-full min-h-[300px] bg-gradient-to-br from-gray-100 to-gray-200 dark:from-[#111] dark:to-[#222] relative border-l border-gray-200 dark:border-white/5 overflow-hidden group order-1 md:order-2">
                            {/* Abstract shapes or screenshot placeholder */}
                            <div className="absolute inset-0 flex items-center justify-center p-8">
                                <div className="w-full h-full bg-white dark:bg-[#050505] rounded-xl border border-gray-200 dark:border-white/10 shadow-2xl relative overflow-hidden">
                                    {/* Mock UI elements */}
                                    <div className="h-4 bg-gray-100 dark:bg-white/5 m-4 w-1/3 rounded-full"/>
                                    <div className="space-y-3 p-4">
                                        <div className="h-20 bg-primary/10 rounded-lg w-full"/>
                                        <div className="h-20 bg-gray-100 dark:bg-white/5 rounded-lg w-full"/>
                                    </div>
                                    
                                    {/* Glowing effect */}
                                    <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/20 blur-3xl rounded-full" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};
