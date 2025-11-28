import { useState, useRef, useEffect } from 'react';
import { SearchableLessonItem } from '../vibeContent';

type SearchBarProps = {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  activeFilter: string;
  onFilterChange: (filter: string) => void;
  results: SearchableLessonItem[];
  onResultClick: (item: SearchableLessonItem) => void;
};

const filters = [
  { id: 'all', label: 'All' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
  { id: 'data', label: 'Data' },
  { id: 'ai tools', label: 'AI Tools' },
  { id: 'project', label: 'Project Ideas' },
];

export default function SearchBar({
  searchQuery,
  onSearchChange,
  activeFilter,
  onFilterChange,
  results,
  onResultClick,
}: SearchBarProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Show dropdown when there are results and query is not empty
  useEffect(() => {
    setIsDropdownOpen(searchQuery.trim().length > 0 && results.length > 0);
    setSelectedIndex(-1);
  }, [searchQuery, results]);

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isDropdownOpen || results.length === 0) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => 
        prev < results.length - 1 ? prev + 1 : prev
      );
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : -1));
    } else if (e.key === 'Enter' && selectedIndex >= 0) {
      e.preventDefault();
      onResultClick(results[selectedIndex]);
      setIsDropdownOpen(false);
      inputRef.current?.blur();
    } else if (e.key === 'Escape') {
      setIsDropdownOpen(false);
      inputRef.current?.blur();
    }
  };

  // Scroll selected item into view
  useEffect(() => {
    if (selectedIndex >= 0 && dropdownRef.current) {
      const selectedElement = dropdownRef.current.children[selectedIndex] as HTMLElement;
      if (selectedElement) {
        selectedElement.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      }
    }
  }, [selectedIndex]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isDropdownOpen]);

  const handleResultClick = (item: SearchableLessonItem) => {
    onResultClick(item);
    setIsDropdownOpen(false);
    setSelectedIndex(-1);
    inputRef.current?.blur();
  };

  return (
    <div className="mb-6 sm:mb-8 relative">
      <div className="card">
        <div className="space-y-3 sm:space-y-4">
          {/* Search Input */}
          <div className="relative">
            <input
              ref={inputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              onKeyDown={handleKeyDown}
              onFocus={() => {
                if (searchQuery.trim().length > 0 && results.length > 0) {
                  setIsDropdownOpen(true);
                }
              }}
              placeholder="Search lessons, concepts, or tools..."
              className="w-full px-4 sm:px-5 py-3 sm:py-4 text-base sm:text-lg bg-white dark:bg-dark-surface border border-gray-200 dark:border-gray-600 rounded-lg text-text-primary-light dark:text-text-primary-dark placeholder:text-text-tertiary-light dark:placeholder:text-text-tertiary-dark focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-200"
              aria-label="Search lessons, concepts, or tools"
              aria-expanded={isDropdownOpen}
              aria-haspopup="listbox"
            />
            <svg
              className="absolute right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 text-text-tertiary-light dark:text-text-tertiary-dark pointer-events-none"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          {/* Filter Chips */}
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => onFilterChange(filter.id)}
                className={`
                  px-4 py-2 rounded-full text-base font-medium transition-colors
                  focus:outline-none focus:ring-2 focus:ring-accent
                  ${
                    activeFilter === filter.id
                      ? 'bg-accent text-dark-bg'
                      : 'bg-white dark:bg-dark-surface text-text-secondary-light dark:text-text-secondary-dark hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600'
                  }
                `}
                aria-pressed={activeFilter === filter.id}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Dropdown Results */}
      {isDropdownOpen && results.length > 0 && (
        <div
          ref={dropdownRef}
          className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-[#1e293b] border border-gray-200 dark:border-gray-600 rounded-lg shadow-xl max-h-[70vh] sm:max-h-96 overflow-y-auto z-50 animate-fade-in"
          role="listbox"
        >
          <div className="p-2">
            <div className="text-xs text-text-tertiary-light dark:text-text-tertiary-dark px-3 py-2 font-semibold">
              {results.length} result{results.length !== 1 ? 's' : ''} found
            </div>
            {results.map((item, index) => (
              <button
                key={item.id}
                onClick={() => handleResultClick(item)}
                className={`
                  w-full text-left px-4 py-3 rounded-lg transition-all duration-150 ease-out
                  hover:bg-gray-50 dark:hover:bg-gray-700 hover:shadow-sm
                  focus:outline-none focus:bg-gray-50 dark:focus:bg-gray-700
                  ${
                    index === selectedIndex
                      ? 'bg-gray-50 dark:bg-gray-700 shadow-sm'
                      : 'bg-white dark:bg-[#1e293b]'
                  }
                `}
                role="option"
                aria-selected={index === selectedIndex}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold text-lg text-text-primary-light dark:text-text-primary-dark truncate">
                        {item.title}
                      </h4>
                      <span className="px-2 py-0.5 bg-white dark:bg-dark-surface text-xs rounded text-text-secondary-light dark:text-text-secondary-dark border border-gray-200 dark:border-gray-600 whitespace-nowrap">
                        {item.estimatedMinutes}m
                      </span>
                    </div>
                    <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark mb-2 line-clamp-2">
                      {item.summary}
                    </p>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs text-text-tertiary-light dark:text-text-tertiary-dark">
                        {item.sectionTitle}
                      </span>
                      <span className="text-xs text-text-tertiary-light dark:text-text-tertiary-dark">•</span>
                      <div className="flex flex-wrap gap-1">
                        {item.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 bg-white dark:bg-dark-surface text-xs rounded text-text-tertiary-light dark:text-text-tertiary-dark border border-gray-200 dark:border-gray-600"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* No results message */}
      {searchQuery.trim().length > 0 && results.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-[#1e293b] border border-gray-200 dark:border-gray-600 rounded-lg shadow-xl p-4 z-50">
          <p className="text-base text-text-secondary-light dark:text-text-secondary-dark text-center">
            No results found. Try a different search term or filter.
          </p>
        </div>
      )}
    </div>
  );
}

