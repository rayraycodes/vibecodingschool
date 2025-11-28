import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Section } from '../vibeContent';

type SectionContentProps = {
  section: Section;
};

export default function SectionContent({ section }: SectionContentProps) {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  // Listen for expand events from search navigation
  useEffect(() => {
    const handleExpandItem = (event: CustomEvent) => {
      const itemId = event.detail.itemId;
      if (section.items.some(item => item.id === itemId)) {
        setExpandedItems(prev => new Set([...prev, itemId]));
      }
    };

    window.addEventListener('expandLessonItem', handleExpandItem as EventListener);
    return () => {
      window.removeEventListener('expandLessonItem', handleExpandItem as EventListener);
    };
  }, [section.items]);

  const toggleItem = (itemId: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(itemId)) {
      newExpanded.delete(itemId);
    } else {
      newExpanded.add(itemId);
    }
    setExpandedItems(newExpanded);
  };

  const sectionHours = Math.floor(section.estimatedMinutes / 60);
  const sectionMins = section.estimatedMinutes % 60;
  const timeDisplay = sectionHours > 0 
    ? `${sectionHours}h ${sectionMins > 0 ? `${sectionMins}m` : ''}`
    : `${sectionMins}m`;

  // Group items by type
  const concepts = section.items.filter(item => item.type === 'concept');
  const exercises = section.items.filter(item => item.type === 'exercise');
  const vibeTips = section.items.filter(item => item.type === 'vibeTip');
  const reflections = section.items.filter(item => item.type === 'reflection');
  const aiPractices = section.items.filter(item => item.type === 'aiPractice');

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header - Matching designforall style */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-3">
          {section.order}. {section.title}
        </h1>
        <div className="flex items-center gap-4 flex-wrap mb-3">
          <span className="px-4 py-2 bg-white dark:bg-slate-800 rounded-full text-sm text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 font-medium">
            {timeDisplay}
          </span>
        </div>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
          {section.summary}
        </p>
      </div>


      {/* Concepts */}
      {concepts.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-slate-100">Concepts</h2>
          <div className="space-y-4">
            {concepts.map((item, index) => (
              <LessonItemCard
                key={item.id}
                item={item}
                isExpanded={expandedItems.has(item.id)}
                onToggle={() => toggleItem(item.id)}
                sectionNumber={section.order}
                itemNumber={index + 1}
              />
            ))}
          </div>
        </section>
      )}

      {/* Exercises */}
      {exercises.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-slate-100">Micro Exercises</h2>
          <div className="space-y-4">
            {exercises.map((item, index) => (
              <LessonItemCard
                key={item.id}
                item={item}
                isExpanded={expandedItems.has(item.id)}
                onToggle={() => toggleItem(item.id)}
                sectionNumber={section.order}
                itemNumber={concepts.length + index + 1}
              />
            ))}
          </div>
        </section>
      )}

      {/* Vibe Tips */}
      {vibeTips.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-slate-100">Vibe Tips</h2>
          <div className="space-y-4">
            {vibeTips.map((item, index) => (
              <LessonItemCard
                key={item.id}
                item={item}
                isExpanded={expandedItems.has(item.id)}
                onToggle={() => toggleItem(item.id)}
                variant="tip"
                sectionNumber={section.order}
                itemNumber={concepts.length + exercises.length + index + 1}
              />
            ))}
          </div>
        </section>
      )}

      {/* Reflections */}
      {reflections.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-slate-100">Reflection</h2>
          <div className="space-y-4">
            {reflections.map((item, index) => (
              <LessonItemCard
                key={item.id}
                item={item}
                isExpanded={expandedItems.has(item.id)}
                onToggle={() => toggleItem(item.id)}
                variant="reflection"
                sectionNumber={section.order}
                itemNumber={concepts.length + exercises.length + vibeTips.length + index + 1}
              />
            ))}
          </div>
        </section>
      )}

      {/* AI Practice Exercises */}
      {aiPractices.length > 0 && (
        <section className="mt-12">
            <div className="card bg-gradient-to-r from-yellow-50 to-yellow-100/50 dark:from-yellow-900/20 dark:to-yellow-900/10 border-2 border-accent">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-text-primary-light dark:text-text-primary-dark leading-tight">
              🚀 Vibe Coding with AI Tools
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-text-secondary-light dark:text-text-secondary-dark mb-4 sm:mb-6 leading-[1.7]">
              Practice using ChatGPT, Cursor, or other AI coding assistants to help you build. 
              Copy the prompts below and paste them into your AI tool of choice!
            </p>
            <div className="space-y-3 sm:space-y-4">
              {aiPractices.map((item, index) => (
                <LessonItemCard
                  key={item.id}
                  item={item}
                  isExpanded={expandedItems.has(item.id)}
                  onToggle={() => toggleItem(item.id)}
                  variant="aiPractice"
                  sectionNumber={section.order}
                  itemNumber={concepts.length + exercises.length + vibeTips.length + reflections.length + index + 1}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

type LessonItemCardProps = {
  item: {
    id: string;
    title: string;
    estimatedMinutes: number;
    tags: string[];
    summary: string;
    body: string;
  };
  isExpanded: boolean;
  onToggle: () => void;
  variant?: 'default' | 'tip' | 'reflection' | 'aiPractice';
  sectionNumber: number;
  itemNumber: number;
};

function LessonItemCard({ item, isExpanded, onToggle, variant = 'default', sectionNumber, itemNumber }: LessonItemCardProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case 'tip':
        return 'border-l-4 border-purple-600 dark:border-purple-400 bg-purple-50/50 dark:bg-purple-900/20';
      case 'reflection':
        return 'border-l-4 border-indigo-600 dark:border-indigo-400 bg-indigo-50/50 dark:bg-indigo-900/20';
      case 'aiPractice':
        return 'border-l-4 border-purple-600 dark:border-purple-400 bg-purple-50/50 dark:bg-purple-900/20';
      default:
        return '';
    }
  };

  return (
    <div
      id={item.id}
      className={`bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden ${getVariantStyles()} transition-all duration-300 ease-out`}
    >
      <button
        onClick={onToggle}
        className="w-full text-left focus:outline-none focus:ring-2 focus:ring-indigo-600 dark:focus:ring-indigo-400 rounded transition-all duration-200"
        aria-expanded={isExpanded}
      >
        <div className="px-6 py-4">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                  {sectionNumber}.{itemNumber}
                </span>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                  {item.title}
                </h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-3 leading-relaxed">{item.summary}</p>
              <div className="flex items-center gap-3 flex-wrap">
                <span className="px-3 py-1 bg-slate-50 dark:bg-slate-800 text-xs rounded-full text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 whitespace-nowrap font-medium">
                  {item.estimatedMinutes}m
                </span>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-slate-50 dark:bg-slate-800 text-xs rounded-full text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <svg
              className={`w-5 h-5 text-slate-500 dark:text-slate-400 flex-shrink-0 transition-transform duration-300 ease-out ${
                isExpanded ? 'transform rotate-180' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </button>

      {isExpanded && (
        <div className="px-6 pb-6 border-t border-slate-200 dark:border-slate-800 animate-fade-in">
          <div className="pt-4 prose prose-sm sm:prose-base dark:prose-invert max-w-none">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                code: ({ node, inline, className, children, ...props }) => {
                  const match = /language-(\w+)/.exec(className || '');
                  return !inline && match ? (
                    <pre className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg overflow-x-auto mb-4 text-sm text-slate-900 dark:text-slate-100 font-mono leading-relaxed">
                      <code className={`${className} font-mono`} {...props}>
                        {children}
                      </code>
                    </pre>
                  ) : (
                    <code className="bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded text-sm text-slate-900 dark:text-slate-100 font-mono" {...props}>
                      {children}
                    </code>
                  );
                },
                h1: ({ children }) => <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-6 mb-4 leading-tight">{children}</h1>,
                h2: ({ children }) => <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mt-5 mb-3 leading-tight">{children}</h2>,
                h3: ({ children }) => <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mt-4 mb-2 leading-tight">{children}</h3>,
                p: ({ children }) => <p className="text-base text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">{children}</p>,
                ul: ({ children }) => <ul className="list-disc text-base text-slate-600 dark:text-slate-400 mb-4 space-y-2 leading-relaxed" style={{ paddingLeft: '1.5rem', listStylePosition: 'outside' }}>{children}</ul>,
                ol: ({ children }) => <ol className="list-decimal text-base text-slate-600 dark:text-slate-400 mb-4 space-y-2 leading-relaxed" style={{ paddingLeft: '1.5rem', listStylePosition: 'outside', fontVariantNumeric: 'tabular-nums' }}>{children}</ol>,
                li: ({ children }) => <li className="text-slate-600 dark:text-slate-400 leading-relaxed" style={{ paddingLeft: '0.5rem', marginLeft: '0' }}>{children}</li>,
                strong: ({ children }) => <strong className="text-slate-900 dark:text-slate-100 font-semibold">{children}</strong>,
                a: ({ href, children }) => (
                  <a href={href} className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium text-base" target="_blank" rel="noopener noreferrer">
                    {children}
                  </a>
                ),
                blockquote: ({ children }) => (
                  <blockquote className="border-l-4 border-indigo-600 dark:border-indigo-400 pl-4 italic text-base text-slate-600 dark:text-slate-400 my-4 leading-relaxed">
                    {children}
                  </blockquote>
                ),
              }}
            >
              {item.body}
            </ReactMarkdown>
          </div>
        </div>
      )}
    </div>
  );
}

