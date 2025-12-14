import React, { useState } from 'react';
import { Copy, Check, ChevronDown, ChevronUp, Tag } from 'lucide-react';
import { Prompt } from '../types';
import { BRAND_COLOR } from '../constants';

interface PromptCardProps {
  prompt: Prompt;
}

const PromptCard: React.FC<PromptCardProps> = ({ prompt }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group flex flex-col bg-slate-800 rounded-xl border border-slate-700 shadow-sm hover:shadow-xl hover:border-blue-500/30 transition-all duration-300 overflow-hidden">
      {/* Header */}
      <div className="p-6 pb-2">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-heading font-semibold text-white group-hover:text-blue-400 transition-colors">
            {prompt.title}
          </h3>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 whitespace-nowrap ml-2">
            {prompt.category}
          </span>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed mb-4">
          {prompt.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {prompt.tags.map((tag, idx) => (
            <span key={idx} className="inline-flex items-center text-xs text-slate-500 bg-slate-900 px-2 py-1 rounded border border-slate-700">
              <Tag className="w-3 h-3 mr-1" />
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Prompt Content Preview Area */}
      <div className="relative px-6 py-4 bg-slate-900/50 border-t border-slate-700">
        <div 
          className={`relative font-mono text-xs text-gray-300 bg-slate-950 p-4 rounded-lg border border-slate-800 whitespace-pre-wrap transition-all duration-300 ${isExpanded ? 'max-h-[800px]' : 'max-h-32 overflow-hidden'}`}
        >
          {prompt.content}
          
          {/* Fade Overlay when collapsed */}
          {!isExpanded && (
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-950 to-transparent rounded-b-lg pointer-events-none"></div>
          )}
        </div>
        
        {/* Actions Bar */}
        <div className="relative z-10 flex items-center justify-between mt-4">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center text-xs font-medium text-slate-400 hover:text-white transition-colors focus:outline-none"
          >
            {isExpanded ? (
              <>
                <ChevronUp className="w-4 h-4 mr-1" />
                Show Less
              </>
            ) : (
              <>
                <ChevronDown className="w-4 h-4 mr-1" />
                Show Full Prompt
              </>
            )}
          </button>

          <button
            onClick={handleCopy}
            className="flex items-center justify-center px-4 py-2 rounded-lg text-sm font-semibold text-white transition-all duration-200 hover:brightness-110 shadow-lg shadow-blue-900/20 active:scale-95"
            style={{ 
              backgroundColor: copied ? '#10B981' : BRAND_COLOR 
            }}
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 mr-2" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 mr-2" />
                Copy Prompt
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromptCard;