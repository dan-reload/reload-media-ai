import React, { useState, useMemo, useEffect } from 'react';
import { Search, Sparkles, Filter, Database, Menu, X, MessageSquareText } from 'lucide-react';
import { BRAND_COLOR, TOOLS_DATA, PROMPTS_DATA } from './constants';
import { Category } from './types';
import PasswordScreen from './components/PasswordScreen';
import ToolCard from './components/ToolCard';
import PromptCard from './components/PromptCard';

const CATEGORIES: Category[] = [
  'All Tools',
  'Proposal/Strategy',
  'Campaign Management',
  'Content Writing',
  'Image Generation',
  'Video',
  'Analytics',
  'SEO',
  'Training'
];

type Tab = 'tools' | 'prompts';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<Tab>('tools');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category>('All Tools');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Check session storage on mount to persist login during refresh
  useEffect(() => {
    const sessionAuth = sessionStorage.getItem('ai_hub_auth');
    if (sessionAuth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
    sessionStorage.setItem('ai_hub_auth', 'true');
  };

  const filteredTools = useMemo(() => {
    return TOOLS_DATA.filter((tool) => {
      const matchesSearch = 
        tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.category.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = selectedCategory === 'All Tools' || tool.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const filteredPrompts = useMemo(() => {
    return PROMPTS_DATA.filter((prompt) => {
      const matchesSearch =
        prompt.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prompt.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prompt.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prompt.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      // Note: We currently don't filter prompts by the main Category pills list to keep it simple,
      // but we could map categories if needed. For now, search handles it well.
      return matchesSearch;
    });
  }, [searchQuery]);

  // Reset filters when switching tabs
  const handleTabChange = (tab: Tab) => {
    setActiveTab(tab);
    setSearchQuery('');
    setSelectedCategory('All Tools');
    setIsMobileMenuOpen(false);
  };

  if (!isAuthenticated) {
    return <PasswordScreen onSuccess={handleLoginSuccess} />;
  }

  return (
    <div className="min-h-screen bg-[#141d29] font-sans text-gray-100">
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-40 bg-[#141d29]/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => handleTabChange('tools')}>
                <span className="text-2xl mr-2">🦊</span>
                <span className="font-heading font-bold text-xl tracking-tight text-white">
                  AI Tools <span style={{ color: BRAND_COLOR }}>Hub</span>
                </span>
              </div>
              <div className="hidden md:ml-6 md:flex md:space-x-8">
                <button
                  onClick={() => handleTabChange('tools')}
                  className={`inline-flex items-center px-1 pt-1 text-sm font-medium transition-colors border-b-2 ${
                    activeTab === 'tools' 
                      ? 'border-blue-500 text-white' 
                      : 'border-transparent text-gray-400 hover:text-white hover:border-slate-600'
                  }`}
                >
                  Tools
                </button>
                <button
                  onClick={() => handleTabChange('prompts')}
                  className={`inline-flex items-center px-1 pt-1 text-sm font-medium transition-colors border-b-2 ${
                    activeTab === 'prompts' 
                      ? 'border-blue-500 text-white' 
                      : 'border-transparent text-gray-400 hover:text-white hover:border-slate-600'
                  }`}
                >
                  Prompts
                </button>
              </div>
            </div>
            
            <div className="flex items-center md:hidden">
                <button 
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-slate-800 focus:outline-none"
                >
                  {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#141d29] border-b border-slate-800">
            <div className="pt-2 pb-4 space-y-1 px-4">
              <button
                onClick={() => handleTabChange('tools')}
                className={`block w-full text-left pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                  activeTab === 'tools'
                    ? 'bg-slate-800 border-blue-500 text-white'
                    : 'border-transparent text-gray-400 hover:bg-slate-800 hover:border-slate-500 hover:text-white'
                }`}
              >
                Tools
              </button>
              <button
                onClick={() => handleTabChange('prompts')}
                className={`block w-full text-left pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                  activeTab === 'prompts'
                    ? 'bg-slate-800 border-blue-500 text-white'
                    : 'border-transparent text-gray-400 hover:bg-slate-800 hover:border-slate-500 hover:text-white'
                }`}
              >
                Prompts
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="bg-[#141d29] border-b border-slate-800 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-heading text-5xl md:text-6xl font-semibold text-blue-500 leading-tight mb-6">
              {activeTab === 'tools' ? 'AI Tools' : 'AI Prompts'}
            </h1>
            <p className="font-sans text-xl text-gray-300 leading-relaxed max-w-2xl">
              {activeTab === 'tools' 
                ? 'Your one-stop shop for all Reload Media AI tools'
                : 'Curated, high-performance prompts for the Reload Media team'
              }
            </p>
            
            <div className="mt-8 flex items-center gap-4">
               <div className="inline-flex items-center px-4 py-2 border border-slate-700 rounded-md shadow-sm text-sm font-medium text-gray-300 bg-slate-800 hover:bg-slate-700 transition-colors">
                  {activeTab === 'tools' ? <Sparkles className="w-4 h-4 mr-2 text-blue-400" /> : <MessageSquareText className="w-4 h-4 mr-2 text-blue-400" />}
                  {activeTab === 'tools' ? `${TOOLS_DATA.length} Tools Available` : `${PROMPTS_DATA.length} Prompts Available`}
               </div>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Controls Section */}
        <div className="space-y-6 mb-8">
          {/* Search Bar */}
          <div className="relative max-w-2xl">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-500" />
            </div>
            <input
              type="text"
              className="block w-full pl-11 pr-4 py-4 border border-slate-700 rounded-xl leading-5 bg-slate-800 text-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent sm:text-sm shadow-sm transition-all"
              placeholder={activeTab === 'tools' ? "Search tools by name, description, or category..." : "Search prompts by title, description, or tags..."}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Categories - Only show for Tools view currently */}
          {activeTab === 'tools' && (
            <div className="space-y-3">
               <div className="flex items-center text-sm text-gray-400 font-medium">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter by Category
               </div>
               <div className="flex flex-wrap gap-2">
                  {CATEGORIES.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                        selectedCategory === category
                          ? 'text-white shadow-md shadow-blue-900/20 transform scale-105 border-transparent'
                          : 'bg-slate-800 text-gray-400 hover:bg-slate-700 hover:text-white border-slate-700'
                      }`}
                      style={selectedCategory === category ? { backgroundColor: BRAND_COLOR } : {}}
                    >
                      {category}
                    </button>
                  ))}
               </div>
            </div>
          )}
        </div>

        {/* Results Grid */}
        {activeTab === 'tools' ? (
          filteredTools.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filteredTools.map((tool, index) => (
                <ToolCard key={index} tool={tool} />
              ))}
            </div>
          ) : (
            <div className="text-center py-24 bg-slate-800/30 rounded-2xl border border-dashed border-slate-700">
              <Database className="mx-auto h-12 w-12 text-slate-600" />
              <h3 className="mt-4 text-lg font-heading font-medium text-white">No tools found</h3>
              <p className="mt-2 text-gray-400">
                Your search for "{searchQuery}" didn't match any tools in the {selectedCategory} category.
              </p>
              <div className="mt-8">
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('All Tools');
                  }}
                  className="inline-flex items-center px-6 py-3 border border-transparent shadow-sm text-sm font-medium rounded-lg text-blue-400 bg-blue-900/20 hover:bg-blue-900/40 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-blue-500 transition-colors"
                >
                  Clear all filters
                </button>
              </div>
            </div>
          )
        ) : (
          // Prompts View
          filteredPrompts.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              {filteredPrompts.map((prompt, index) => (
                <PromptCard key={index} prompt={prompt} />
              ))}
            </div>
          ) : (
            <div className="text-center py-24 bg-slate-800/30 rounded-2xl border border-dashed border-slate-700">
              <Database className="mx-auto h-12 w-12 text-slate-600" />
              <h3 className="mt-4 text-lg font-heading font-medium text-white">No prompts found</h3>
              <p className="mt-2 text-gray-400">
                Your search for "{searchQuery}" didn't match any prompts.
              </p>
              <div className="mt-8">
                <button
                  onClick={() => setSearchQuery('')}
                  className="inline-flex items-center px-6 py-3 border border-transparent shadow-sm text-sm font-medium rounded-lg text-blue-400 bg-blue-900/20 hover:bg-blue-900/40 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-blue-500 transition-colors"
                >
                  Clear search
                </button>
              </div>
            </div>
          )
        )}
      </main>
      
      {/* Footer */}
      <footer className="bg-[#141d29] border-t border-slate-800 mt-8">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-slate-500 font-sans">
            &copy; {new Date().getFullYear()} Reload Media. All rights reserved. Internal Tool.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;