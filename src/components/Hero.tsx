import { totalEstimatedMinutes } from '../vibeContent';
import { SearchableLessonItem } from '../vibeContent';
import SearchBar from './SearchBar';
import FlowDiagram from './FlowDiagram';

type HeroProps = {
  onStartClick: () => void;
  onBrowseClick: () => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  activeFilter: string;
  onFilterChange: (filter: string) => void;
  searchResults: SearchableLessonItem[];
  onResultClick: (item: SearchableLessonItem) => void;
};

export default function Hero({ 
  onStartClick, 
  onBrowseClick,
  searchQuery,
  onSearchChange,
  activeFilter,
  onFilterChange,
  searchResults,
  onResultClick,
}: HeroProps) {
  const totalHours = Math.floor(totalEstimatedMinutes / 60);
  const totalMins = totalEstimatedMinutes % 60;

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Hero Section */}
      <div className="text-center space-y-6 py-12">
        <div className="inline-block px-4 py-2 bg-white dark:bg-dark-card rounded-full text-sm text-text-secondary-light dark:text-text-secondary-dark mb-4 border border-gray-200 dark:border-gray-600">
          Start from where you are, with what you have
        </div>
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary-light dark:text-text-primary-dark px-4">
          VibeCode School
        </h1>
        
        <p className="text-base sm:text-lg text-text-secondary-light dark:text-text-secondary-dark max-w-4xl mx-auto leading-[1.6] px-4">
          A one week guide to vibe coding from zero. Learn how to build real web projects 
          that solve problems, starting from people and stories, not from syntax.
        </p>

        {/* Quote Card */}
        <div className="max-w-4xl mx-auto px-4 pt-6">
          <div className="card border-l-4 border-indigo-600 dark:border-indigo-400">
            <blockquote className="text-base sm:text-lg italic text-slate-700 dark:text-slate-300 leading-[1.7]">
              "Coding is not about memorizing syntax. It's about understanding people, 
              solving problems, and using tools thoughtfully to build things that matter. 
              Start from where you are, with what you have."
            </blockquote>
          </div>
        </div>

        {/* Search Bar */}
        <div className="max-w-4xl mx-auto px-4 pt-6">
          <SearchBar
            searchQuery={searchQuery}
            onSearchChange={onSearchChange}
            activeFilter={activeFilter}
            onFilterChange={onFilterChange}
            results={searchResults}
            onResultClick={onResultClick}
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <button
            onClick={onStartClick}
            className="btn-primary w-full sm:w-auto"
          >
            Start Day 1 →
          </button>
          <button
            onClick={onBrowseClick}
            className="btn-secondary w-full sm:w-auto"
          >
            Browse All Lessons
          </button>
        </div>

        <p className="text-sm text-text-tertiary-light dark:text-text-tertiary-dark pt-4">
          Estimated time: ~{totalHours}h {totalMins > 0 && `${totalMins}m`} total
        </p>
      </div>

      {/* Flow Diagram */}
      <FlowDiagram />

      {/* Learning Approach Cards */}
      <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
        <div className="card">
          <h3 className="text-lg sm:text-xl font-semibold mb-4 text-text-primary-light dark:text-text-primary-dark">Interactive Learning</h3>
          <p className="text-sm sm:text-base text-text-secondary-light dark:text-text-secondary-dark leading-[1.7]">
            Every concept comes with hands-on exercises. You'll build a real project 
            throughout the week, adding features day by day. Learn by doing, not just reading.
          </p>
        </div>

        <div className="card">
          <h3 className="text-lg sm:text-xl font-semibold mb-4 text-text-primary-light dark:text-text-primary-dark">People-Centered Approach</h3>
          <p className="text-sm sm:text-base text-text-secondary-light dark:text-text-secondary-dark leading-[1.7]">
            Start from real problems and stories from your life. Before writing code, 
            ask: Who is this for? What problem does it solve? Why does it matter?
          </p>
        </div>
      </div>

      {/* What is Vibe Coding */}
      <div className="card">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-5 text-text-primary-light dark:text-text-primary-dark">What Is Vibe Coding?</h2>
        <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-text-secondary-light dark:text-text-secondary-dark leading-[1.7]">
          <p>
            Vibe coding isn't about memorizing syntax or following rigid rules. It's a mindset:
          </p>
          <ul className="list-disc space-y-2 text-sm sm:text-base text-text-secondary-light dark:text-text-secondary-dark leading-[1.75]" style={{ paddingLeft: '1.5rem', listStylePosition: 'outside' }}>
            <li className="leading-[1.75]" style={{ paddingLeft: '0.5rem', marginLeft: '0' }}><strong className="text-text-primary-light dark:text-text-primary-dark">Start from where you are, with what you have.</strong> You don't need the latest MacBook or a computer science degree.</li>
            <li className="leading-[1.75]" style={{ paddingLeft: '0.5rem', marginLeft: '0' }}><strong className="text-text-primary-light dark:text-text-primary-dark">Start from a real problem or story from your life.</strong> Before you write code, ask: Who is this for? What problem does it solve?</li>
            <li className="leading-[1.75]" style={{ paddingLeft: '0.5rem', marginLeft: '0' }}><strong className="text-text-primary-light dark:text-text-primary-dark">Think deeply about the people who will use your product.</strong> How do they behave? What's their context? What accessibility needs might they have?</li>
            <li className="leading-[1.75]" style={{ paddingLeft: '0.5rem', marginLeft: '0' }}><strong className="text-text-primary-light dark:text-text-primary-dark">Use AI tools as collaborators, not answer machines.</strong> Let them generate code, but always read it, test it, and ask "why is this written like this?"</li>
            <li className="leading-[1.75]" style={{ paddingLeft: '0.5rem', marginLeft: '0' }}><strong className="text-text-primary-light dark:text-text-primary-dark">Be playful and experimental.</strong> You learn by trying, debugging, remixing, and reflecting.</li>
            <li className="leading-[1.75]" style={{ paddingLeft: '0.5rem', marginLeft: '0' }}><strong className="text-text-primary-light dark:text-text-primary-dark">Remember: tech is a tool, not the whole solution.</strong> Real value comes from understanding people and problems.</li>
          </ul>
        </div>
      </div>

      {/* Call to Action */}
      <div className="card bg-gradient-to-r from-gray-50 to-gray-100 dark:from-dark-card dark:to-dark-surface border-accent/20">
        <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-text-primary-light dark:text-text-primary-dark">Ready to Start?</h3>
        <p className="text-sm sm:text-base text-text-secondary-light dark:text-text-secondary-dark mb-4 sm:mb-5 leading-[1.7]">
          Begin with Section 1: Vibe Coding Basics—understand what programming is, 
          how it's changed, and pick your project idea. You'll build something real 
          that solves a problem or tells a story from your own life.
        </p>
        <button
          onClick={onStartClick}
          className="btn-primary"
        >
          Start Day 1 →
        </button>
      </div>
    </div>
  );
}

