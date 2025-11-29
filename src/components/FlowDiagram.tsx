import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { sections } from '../vibeContent';

type FlowStep = {
  number: number;
  title: string;
  description: string;
};

// Create flow steps from sections
const flowSteps: FlowStep[] = [
  {
    number: 0,
    title: 'Start from Zero',
    description: 'No coding experience needed. Just curiosity and a problem to solve.',
  },
  ...sections.map((section) => ({
    number: section.order,
    title: section.shortTitle,
    description: section.summary,
  })),
  {
    number: sections.length + 1,
    title: 'Vibe Coding Mastery',
    description: 'You can now build real projects that solve problems and tell stories.',
  },
];

export default function FlowDiagram() {
  return (
    <div className="card bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20 border-2 border-indigo-200 dark:border-indigo-800">
      <div className="mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mb-3">
          Your Journey: From Zero to Vibe Coding
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          A visual roadmap of your learning path. Each step builds on the previous one.
        </p>
      </div>

      <div className="space-y-4">
        {flowSteps.map((step, index) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="relative"
          >
            {/* Connection Line */}
            {index < flowSteps.length - 1 && (
              <div className="absolute left-6 top-16 w-0.5 h-8 bg-indigo-300 dark:bg-indigo-700 z-0" />
            )}

            <div className="relative flex items-start gap-4">
              {/* Step Number Circle */}
              <div className={`
                relative z-10 flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm
                ${step.number === 0 
                  ? 'bg-slate-400 dark:bg-slate-600 text-white' 
                  : step.number === flowSteps.length - 1
                  ? 'bg-purple-600 dark:bg-purple-500 text-white'
                  : 'bg-indigo-600 dark:bg-indigo-500 text-white'
                }
                shadow-lg
              `}>
                {step.number === flowSteps.length - 1 ? (
                  <CheckCircle2 className="w-6 h-6" />
                ) : (
                  step.number
                )}
              </div>

              {/* Step Content */}
              <div className="flex-1 pt-1">
                <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100 mb-1">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Arrow (hidden on last step) */}
              {index < flowSteps.length - 1 && (
                <div className="hidden md:block pt-1">
                  <ArrowRight className="w-5 h-5 text-indigo-400 dark:text-indigo-500" />
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mobile Arrow Indicators */}
      <div className="md:hidden flex justify-center gap-2 mt-4">
        {flowSteps.slice(0, -1).map((_, index) => (
          <ArrowRight
            key={index}
            className="w-4 h-4 text-indigo-400 dark:text-indigo-500 rotate-90"
          />
        ))}
      </div>
    </div>
  );
}

