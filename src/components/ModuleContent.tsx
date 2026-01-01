import { Module } from '../data/modules';
import { TopicCard } from './TopicCard';
import { Sparkles } from 'lucide-react';

interface ModuleContentProps {
  module: Module;
}

export function ModuleContent({ module }: ModuleContentProps) {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-8 p-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl text-white shadow-xl">
        <div className="flex items-center gap-3 mb-2">
          <Sparkles className="w-6 h-6" />
          <h1 className="text-white">{module.title}</h1>
        </div>
        <p className="text-white/90 text-lg">{module.description}</p>
      </div>

      <div className="space-y-6">
        {module.topics.map((topic, index) => (
          <TopicCard key={index} topic={topic} />
        ))}
      </div>
    </div>
  );
}