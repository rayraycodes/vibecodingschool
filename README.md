# VibeCode School

A beautiful, fully client-side interactive workbook website for the "Full Stack Vibe Coding From Scratch" one-week course.

## Features

- 📚 **8 Comprehensive Sections** covering everything from basics to AI tools
- 🔍 **Search & Filter** - Find lessons, concepts, and exercises quickly
- 📱 **Responsive Design** - Works beautifully on desktop, tablet, and mobile
- ♿ **Accessible** - Built with semantic HTML, keyboard navigation, and ARIA labels
- 🎨 **Dark Theme** - Inspired by Refactoring UI principles
- 💾 **Local Storage** - Remembers your last opened section
- 📖 **Markdown Support** - Rich content rendering with code syntax highlighting

## Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **React Markdown** - Markdown rendering
- **Remark GFM** - GitHub Flavored Markdown support

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory. You can deploy this to any static hosting service like:
- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages

## Project Structure

```
vibecodeschool/
├── src/
│   ├── components/          # React components
│   │   ├── Sidebar.tsx      # Navigation sidebar
│   │   ├── Hero.tsx         # Landing page hero
│   │   ├── SectionContent.tsx  # Section content renderer
│   │   └── SearchBar.tsx    # Search and filter UI
│   ├── vibeContent.ts       # All course content (TypeScript config)
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles
├── index.html
├── package.json
├── vite.config.ts
└── tailwind.config.js
```

## Content Structure

All content lives in `src/vibeContent.ts` as a TypeScript configuration. Each section contains:

- **Section metadata**: title, summary, estimated time
- **Lesson items**: concepts, exercises, vibe tips, and reflections
- **Tags**: for filtering and search
- **Markdown body**: rich content with code examples

## Customization

### Adding Content

Edit `src/vibeContent.ts` to add new sections or lessons. Follow the existing structure:

```typescript
{
  id: "unique-id",
  title: "Section Title",
  shortTitle: "Short",
  estimatedMinutes: 60,
  summary: "Brief description",
  items: [
    {
      id: "lesson-id",
      title: "Lesson Title",
      estimatedMinutes: 15,
      tags: ["tag1", "tag2"],
      type: "concept" | "exercise" | "vibeTip" | "reflection",
      summary: "Brief summary",
      body: "Markdown content here..."
    }
  ]
}
```

### Styling

The design uses Tailwind CSS with custom colors defined in `tailwind.config.js`. The dark theme colors are:

- `dark-bg`: Main background
- `dark-surface`: Sidebar and cards
- `dark-card`: Card backgrounds
- `accent`: Primary accent color (yellow)

### Accessibility

The site includes:
- Semantic HTML (`nav`, `main`, `section`, proper headings)
- ARIA labels and roles
- Keyboard navigation support
- Focus indicators
- High contrast colors

## Contributing

We welcome contributions! Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines on how to contribute to this project.

### Ways to Contribute

- 🐛 Report bugs
- 💡 Suggest new features
- 📝 Improve documentation
- 🎨 Enhance the design
- 📚 Add or improve content
- ♿ Improve accessibility
- 🌐 Translate content

## Open Source

VibeCode School is an open-source educational project. We believe in:

- **Accessibility First** - Making coding education accessible to everyone
- **People-Centered Design** - Starting from real problems and stories
- **Community Learning** - Learning together and sharing knowledge
- **Open Collaboration** - Building better together

### Why Open Source?

This project is open source because:

1. **Education Should Be Free** - Everyone deserves access to quality coding education
2. **Community Improves Everything** - More eyes, more ideas, better outcomes
3. **Learning by Contributing** - Contributing to open source is a great way to learn
4. **Vibe Coding Philosophy** - Start from where you are, with what you have

### How to Get Involved

- Star the repository if you find it useful
- Share with others who might benefit
- Contribute content, code, or feedback
- Report issues or suggest improvements
- Help improve accessibility

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## Acknowledgments

- Built with the vibe coding philosophy
- Inspired by accessible design principles
- Powered by the open-source community

