import React, { useState, useEffect } from 'react';
import { Lock, ArrowRight, AlertCircle } from 'lucide-react';
import { BRAND_COLOR } from '../constants';

interface PasswordScreenProps {
  onSuccess: () => void;
}

const PasswordScreen: React.FC<PasswordScreenProps> = ({ onSuccess }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'reloadlovesai') {
      onSuccess();
    } else {
      setError(true);
      setPassword('');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#141d29] overflow-hidden text-white font-sans">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] rounded-full bg-blue-600 blur-3xl"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-blue-900 blur-3xl"></div>
      </div>

      <div 
        className={`relative w-full max-w-md p-8 bg-slate-800 rounded-2xl shadow-2xl border border-slate-700 transform transition-all duration-700 ${animate ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
      >
        <div className="flex flex-col items-center mb-8">
          <div className="w-20 h-20 bg-slate-700 rounded-full flex items-center justify-center mb-4 text-4xl shadow-inner border border-slate-600">
            🦊
          </div>
          <h1 className="text-3xl font-heading font-bold text-white mb-2">AI Tools Hub</h1>
          <p className="text-gray-400 text-center">Please authenticate to access the AI Tools Hub.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError(false);
              }}
              className={`w-full pl-10 pr-4 py-3 bg-slate-900 border rounded-lg outline-none transition-all duration-200 text-white placeholder-gray-500 focus:ring-2 focus:ring-offset-1 focus:ring-offset-slate-800 ${
                error 
                  ? 'border-red-500 focus:ring-red-500' 
                  : 'border-slate-600 focus:border-blue-500 focus:ring-blue-500'
              }`}
              placeholder="Enter access password"
              autoFocus
            />
          </div>

          {error && (
            <div className="flex items-center text-red-400 text-sm animate-pulse">
              <AlertCircle className="w-4 h-4 mr-2" />
              Incorrect password. Please try again.
            </div>
          )}

          <button
            type="submit"
            className="group w-full py-3 px-4 text-white font-semibold rounded-lg shadow-lg flex items-center justify-center transition-all duration-200 transform hover:translate-y-[-1px] active:translate-y-[1px] hover:shadow-blue-500/25"
            style={{ backgroundColor: BRAND_COLOR }}
          >
            Access Dashboard
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </form>
        
        <div className="mt-8 text-center">
            <p className="text-xs text-gray-500 uppercase tracking-widest">Internal Use Only</p>
        </div>
      </div>
    </div>
  );
};

export default PasswordScreen;