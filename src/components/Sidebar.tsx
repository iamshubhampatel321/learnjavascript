import { Module } from '../data/modules';

interface SidebarProps {
  modules: Module[];
  activeModule: number;
  setActiveModule: (index: number) => void;
}

export function Sidebar({ modules, activeModule, setActiveModule }: SidebarProps) {
  return (
    <aside className="fixed left-0 top-16 bottom-0 w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 overflow-y-auto">
      <div className="p-4">
        <h2 className="text-sm text-gray-500 dark:text-gray-400 mb-3">Learning Modules</h2>
        <nav className="space-y-1">
          {modules.map((module, index) => (
            <button
              key={index}
              onClick={() => setActiveModule(index)}
              className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                activeModule === index
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className={`text-xs px-2 py-1 rounded ${
                  activeModule === index 
                    ? 'bg-white/20' 
                    : 'bg-gray-200 dark:bg-gray-700'
                }`}>
                  {index + 1}
                </span>
                <span className="text-sm">{module.title}</span>
              </div>
            </button>
          ))}
        </nav>
      </div>
    </aside>
  );
}