import { sections, totalEstimatedMinutes } from '../vibeContent';

type SidebarProps = {
  sections: typeof sections;
  currentSectionId: string | null;
  onSectionClick: (sectionId: string) => void;
  onHomeClick: () => void;
  isOpen: boolean;
  onToggle: () => void;
};

export default function Sidebar({
  sections,
  currentSectionId,
  onSectionClick,
  onHomeClick,
  isOpen,
  onToggle,
}: SidebarProps) {
  const totalHours = Math.floor(totalEstimatedMinutes / 60);
  const totalMins = totalEstimatedMinutes % 60;

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onToggle}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed left-0 top-0 h-full w-80 sm:w-96 lg:w-[400px] bg-gray-50 dark:bg-dark-surface border-r border-gray-200 dark:border-gray-600 z-50
          transform transition-transform duration-300 ease-in-out
          lg:translate-x-0
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <div className="flex flex-col h-full overflow-y-auto">
          {/* Header */}
          <div className="p-4 sm:p-6 border-b border-gray-200 dark:border-gray-600">
            <button
              onClick={onHomeClick}
              className="flex items-center gap-2 w-full text-left focus:outline-none focus:ring-2 focus:ring-indigo-600 dark:focus:ring-indigo-400 focus:ring-offset-2 rounded-lg p-1 -m-1"
              aria-label="Go to home page"
            >
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm">VCS</span>
              </div>
              <div className="flex-1 min-w-0">
                <h1 className="text-lg font-bold text-slate-900 dark:text-slate-100 leading-tight">
                  VibeCode School
                </h1>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  vibe coding made accessible
                </p>
              </div>
            </button>
            <p className="text-sm sm:text-base text-text-secondary-light dark:text-text-secondary-dark mt-3 leading-relaxed">
              A one week guide to vibe coding from zero
            </p>
            <p className="text-sm sm:text-base text-text-secondary-light dark:text-text-secondary-dark mt-2.5 font-medium">
              Total time: ~{totalHours}h {totalMins > 0 && `${totalMins}m`}
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-3 sm:p-4" aria-label="Course sections">
            <ul className="space-y-2.5 sm:space-y-3">
              {sections.map((section) => {
                const isActive = currentSectionId === section.id;
                const sectionHours = Math.floor(section.estimatedMinutes / 60);
                const sectionMins = section.estimatedMinutes % 60;
                const timeDisplay = sectionHours > 0 
                  ? `${sectionHours}h ${sectionMins > 0 ? `${sectionMins}m` : ''}`
                  : `${sectionMins}m`;

                return (
                  <li key={section.id}>
                    <button
                      onClick={() => onSectionClick(section.id)}
                      className={`
                        w-full text-left px-3 sm:px-4 py-3 sm:py-4 rounded-lg transition-all duration-200 ease-out
                        focus:outline-none focus:ring-2 focus:ring-indigo-600 dark:focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-gray-50 dark:focus:ring-offset-dark-surface
                        ${
                          isActive
                            ? 'bg-white dark:bg-dark-card text-indigo-600 dark:text-indigo-400 border-l-4 border-indigo-600 dark:border-indigo-400 font-semibold shadow-sm'
                            : 'text-text-primary-light dark:text-text-primary-dark hover:bg-white dark:hover:bg-dark-card hover:text-indigo-600 dark:hover:text-indigo-400 hover:shadow-sm'
                        }
                      `}
                      aria-current={isActive ? 'page' : undefined}
                      aria-label={`Navigate to ${section.shortTitle}`}
                    >
                      <div className="flex items-baseline justify-between gap-3 mb-3">
                        <div className="flex items-baseline gap-3 min-w-0 flex-1">
                          <span className={`text-lg font-bold ${isActive ? 'text-accent-600' : 'text-gray-600 dark:text-text-secondary-dark'} w-7 flex-shrink-0`}>
                            {section.order}
                          </span>
                          <span className={`font-semibold text-base sm:text-lg ${isActive ? 'text-accent-600' : 'text-text-primary-light dark:text-text-primary-dark'} leading-tight`}>{section.shortTitle}</span>
                        </div>
                        <span className={`text-sm font-medium ${isActive ? 'text-accent-600' : 'text-gray-500 dark:text-text-secondary-dark'} whitespace-nowrap flex-shrink-0`}>{timeDisplay}</span>
                      </div>
                      <p className={`text-sm ${isActive ? 'text-gray-600 dark:text-text-secondary-dark' : 'text-gray-600 dark:text-text-secondary-dark'} ml-10 line-clamp-2 leading-relaxed`}>
                        {section.summary}
                      </p>
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </aside>

      {/* Mobile menu button */}
      <button
        onClick={onToggle}
        className="lg:hidden fixed top-4 left-4 z-50 bg-white dark:bg-dark-card p-3 rounded-lg text-text-primary-light dark:text-text-primary-dark hover:bg-gray-50 dark:hover:bg-dark-surface border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-accent shadow-lg transition-all"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>
    </>
  );
}

