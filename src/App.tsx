import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import SectionContent from './components/SectionContent';
import ThemeToggle from './components/ThemeToggle';
import { sections, SearchableLessonItem, allLessonItems } from './vibeContent';

type ViewMode = 'hero' | 'section' | 'search';

function App() {
  const [currentSectionId, setCurrentSectionId] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<ViewMode>('hero');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchableLessonItem[]>([]);
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // Load last opened section and theme from localStorage
  useEffect(() => {
    const lastSection = localStorage.getItem('lastOpenedSection');
    if (lastSection) {
      const section = sections.find(s => s.id === lastSection);
      if (section) {
        setCurrentSectionId(lastSection);
        setViewMode('section');
      }
    }
    
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark');
    }
  }, []);

  // Save current section to localStorage
  useEffect(() => {
    if (currentSectionId) {
      localStorage.setItem('lastOpenedSection', currentSectionId);
    }
  }, [currentSectionId]);

  const handleSectionClick = (sectionId: string) => {
    setCurrentSectionId(sectionId);
    setViewMode('section');
    setSearchQuery('');
    setSidebarOpen(false);
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim() === '') {
      setSearchResults([]);
      return;
    }

    const filtered = allLessonItems.filter(item => {
      const matchesQuery = 
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.summary.toLowerCase().includes(query.toLowerCase()) ||
        item.body.toLowerCase().includes(query.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()));

      const matchesFilter = activeFilter === 'all' || 
        item.tags.some(tag => tag.toLowerCase() === activeFilter.toLowerCase());

      return matchesQuery && matchesFilter;
    });

    setSearchResults(filtered);
    // Don't change view mode - keep showing current content, dropdown will show results
  };

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    if (searchQuery) {
      handleSearch(searchQuery);
    }
  };

  const handleResultClick = (item: SearchableLessonItem) => {
    const section = sections.find(s => s.id === item.sectionId);
    if (section) {
      setCurrentSectionId(section.id);
      setViewMode('section');
      setSearchQuery('');
      setSearchResults([]);
      setSidebarOpen(false);
      
      // Wait for section to render, then scroll to the item and expand it
      setTimeout(() => {
        const element = document.getElementById(item.id);
        if (element) {
          // Scroll to the element
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
          
          // If it's in an accordion, we need to trigger the expansion
          // The accordion state is managed in SectionContent, so we'll use a custom event
          window.dispatchEvent(new CustomEvent('expandLessonItem', { detail: { itemId: item.id } }));
          
          // Also try clicking the button to expand if it's collapsed
          const button = element.querySelector('button');
          if (button && button.getAttribute('aria-expanded') === 'false') {
            setTimeout(() => button.click(), 300);
          }
        }
      }, 200);
    }
  };

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    if (newIsDark) {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const currentSection = currentSectionId 
    ? sections.find(s => s.id === currentSectionId) 
    : null;

  return (
    <div className="min-h-screen flex">
      {/* Skip to main content link for keyboard users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-indigo-600 focus:text-white focus:rounded-lg focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
      >
        Skip to main content
      </a>
      <Sidebar
        sections={sections}
        currentSectionId={currentSectionId}
        onSectionClick={handleSectionClick}
        onHomeClick={() => {
          setViewMode('hero');
          setCurrentSectionId(null);
          setSearchQuery('');
          setSidebarOpen(false);
        }}
        isOpen={sidebarOpen}
        onToggle={() => setSidebarOpen(!sidebarOpen)}
      />
      
      <main id="main-content" className="flex-1 lg:ml-80 xl:ml-[400px]" tabIndex={-1}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 py-6 sm:py-8">
          <div className="fixed top-4 right-4 z-50 sm:top-6 sm:right-6 lg:top-8 lg:right-8">
            <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
          </div>
          {viewMode === 'hero' && (
            <Hero
              onStartClick={() => {
                handleSectionClick(sections[0].id);
              }}
              onBrowseClick={() => {
                handleSectionClick(sections[0].id);
              }}
              searchQuery={searchQuery}
              onSearchChange={handleSearch}
              activeFilter={activeFilter}
              onFilterChange={handleFilterChange}
              searchResults={searchResults}
              onResultClick={handleResultClick}
            />
          )}

          {viewMode === 'section' && currentSection && (
            <SectionContent section={currentSection} />
          )}

        </div>
      </main>
    </div>
  );
}

export default App;

