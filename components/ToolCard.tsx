import React from 'react';
import { ExternalLink, Tag, Briefcase, DollarSign, User } from 'lucide-react';
import { Tool } from '../types';
import { BRAND_COLOR } from '../constants';

interface ToolCardProps {
  tool: Tool;
}

const ToolCard: React.FC<ToolCardProps> = ({ tool }) => {
  return (
    <div className="group flex flex-col h-full bg-slate-800 rounded-xl border border-slate-700 shadow-sm hover:shadow-xl hover:border-blue-500/50 hover:shadow-blue-900/10 transition-all duration-300 overflow-hidden">
      {/* Header */}
      <div className="p-6 pb-4">
        <div className="flex justify-between items-start mb-4">
          <h3 
            className="text-xl font-heading font-semibold text-white group-hover:text-blue-400 transition-colors"
          >
            {tool.name}
          </h3>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
            {tool.category}
          </span>
        </div>
        
        <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3 font-sans">
          {tool.description}
        </p>
      </div>

      {/* Meta Data */}
      <div className="px-6 py-4 bg-slate-900/50 mt-auto border-t border-slate-700 space-y-3 font-sans">
        <div className="flex items-center text-xs text-gray-400">
          <DollarSign className="w-3.5 h-3.5 mr-2 text-slate-500" />
          <span className="font-semibold text-gray-300 mr-1">Pricing:</span> 
          {tool.pricing}
        </div>
        <div className="flex items-center text-xs text-gray-400">
          <User className="w-3.5 h-3.5 mr-2 text-slate-500" />
          <span className="font-semibold text-gray-300 mr-1">Owner:</span> 
          {tool.owner}
        </div>
        <div className="flex items-start text-xs text-gray-400">
            <Briefcase className="w-3.5 h-3.5 mr-2 mt-0.5 text-slate-500 flex-shrink-0" />
            <span>
              <span className="font-semibold text-gray-300 mr-1">Use Cases:</span> 
              {tool.useCases}
            </span>
        </div>
      </div>

      {/* Action */}
      <div className="p-4 pt-0 bg-slate-900/50">
        <a 
          href={tool.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center justify-center w-full py-2.5 rounded-lg text-sm font-semibold text-white transition-colors duration-200 hover:brightness-110 shadow-lg shadow-blue-900/20 font-sans"
          style={{ backgroundColor: BRAND_COLOR }}
        >
          Open Tool
          <ExternalLink className="w-4 h-4 ml-2" />
        </a>
      </div>
    </div>
  );
};

export default ToolCard;