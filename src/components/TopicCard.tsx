import { useState } from 'react';
import { ChevronDown, ChevronUp, Lightbulb } from 'lucide-react';
import { Topic } from '../data/modules';
import { CodeBlock } from './CodeBlock';

interface TopicCardProps {
  topic: Topic;
}

export function TopicCard({ topic }: TopicCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 transition-all hover:shadow-xl">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
      >
        <h3 className="text-gray-900 dark:text-white">{topic.title}</h3>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-gray-500" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-500" />
        )}
      </button>

      {isOpen && (
        <div className="px-6 pb-6 space-y-4">
          <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500">
            <p className="text-gray-700 dark:text-gray-300">{topic.definition}</p>
          </div>

          {topic.example && (
            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border-l-4 border-purple-500">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <p className="text-purple-800 dark:text-purple-300">Real-World Example</p>
              </div>
              <p className="text-gray-700 dark:text-gray-300">{topic.example}</p>
            </div>
          )}

          {topic.code && <CodeBlock code={topic.code} />}

          {topic.subtopics && topic.subtopics.length > 0 && (
            <div className="space-y-3 mt-4">
              {topic.subtopics.map((subtopic, index) => (
                <div key={index} className="pl-4 border-l-2 border-gray-300 dark:border-gray-600">
                  <h4 className="text-gray-800 dark:text-gray-200 mb-2">{subtopic.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">{subtopic.definition}</p>
                  {subtopic.code && <CodeBlock code={subtopic.code} />}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}