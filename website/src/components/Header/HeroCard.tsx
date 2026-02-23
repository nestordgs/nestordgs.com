import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface HeroCardProps {
  icon: any;
  title: string;
  desc: string;
}

export const HeroCard = ({ icon, title, desc }: HeroCardProps) => (
  <div className="bg-white dark:bg-card backdrop-blur-md border border-gray-200 dark:border-white/10 p-6 rounded-2xl hover:border-primary/50 transition-all duration-300 group h-full shadow-lg dark:shadow-none">
    <div className="w-10 h-10 bg-primary/10 dark:bg-primary/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 dark:group-hover:bg-primary/30 transition-colors">
      <FontAwesomeIcon icon={icon} className="text-primary text-xl" />
    </div>
    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{desc}</p>
  </div>
);
