import React from "react";
import dayjs from "dayjs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub, faDev } from "@fortawesome/free-brands-svg-icons";

const ConnectCard = ({ icon, label, href }: { icon: any, label: string, href: string }) => (
    <a href={href} target="_blank" rel="noreferrer" className="flex items-center gap-4 bg-white dark:bg-card border border-gray-200 dark:border-white/10 p-4 rounded-xl hover:border-primary/50 hover:bg-gray-50 dark:hover:bg-white/5 transition-all group min-w-[200px] shadow-sm dark:shadow-none">
        <div className="w-10 h-10 bg-primary/10 dark:bg-white/5 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-dark transition-colors">
            <FontAwesomeIcon icon={icon} className="text-xl" />
        </div>
        <span className="text-gray-700 dark:text-gray-300 font-medium group-hover:text-gray-900 dark:group-hover:text-white">{label}</span>
    </a>
);

export const Footer = () => {
  return (
    <footer className="w-full bg-gray-50 dark:bg-deep-dark py-10 pb-5 transition-colors duration-300" id="connect">
      <div className="container max-w-6xl mx-auto px-4 md:px-0">
        <div className="flex flex-col items-center text-center space-y-12">
            
            <div className="space-y-4">
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Connect</h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
                        Feel free to reach out for collaborations, questions, or just to say hi.
                    </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
                    <ConnectCard 
                        icon={faLinkedin}
                        label="LinkedIn"
                        href="https://www.linkedin.com/in/nestordgs/"
                    />
                    <ConnectCard 
                        icon={faGithub}
                        label="GitHub"
                        href="https://github.com/nestordgs"
                    />
                    <ConnectCard 
                        icon={faDev}
                        label="Dev.to"
                        href="https://dev.to/nestordgs"
                    />
                    <ConnectCard 
                        icon={faEnvelope}
                        label="Email Me"
                        href="mailto:contact@nestordgs.com" // Assuming email
                    />
            </div>

            <div className="pt-5 border-t border-black/5 dark:border-white/5 w-full">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-gray-500 dark:text-gray-400 text-sm flex items-center gap-2">
                            Developed with <FontAwesomeIcon icon={faHeart} className="text-red-500 animate-pulse" /> by nestordgs {dayjs().year()}
                        </p>
                        <div className="flex items-center gap-6">
                            <a href="#experience" className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary text-sm transition-colors">
                                Experience
                            </a>
                            <a href="#projects" className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary text-sm transition-colors">
                                Featured Project
                            </a>
                            <a href="#profile" className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary text-sm transition-colors">
                                About
                            </a>
                        </div>
                    </div>
            </div>

        </div>
      </div>
    </footer>
  );
};
