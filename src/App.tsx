import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { ModuleContent } from './components/ModuleContent';
import { Header } from './components/Header';
import { modules } from './data/modules';

export default function App() {
  const [activeModule, setActiveModule] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
        <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        
        <div className="flex">
          <Sidebar 
            modules={modules} 
            activeModule={activeModule} 
            setActiveModule={setActiveModule}
          />
          
          <main className="flex-1 ml-64 p-8 pt-24">
            <ModuleContent module={modules[activeModule]} />
          </main>
        </div>
      </div>
    </div>
  );
}
