# Contributing to VibeCode School

Thank you for your interest in contributing to VibeCode School! This document provides guidelines and instructions for contributing to this open-source project.

## Code of Conduct

By participating in this project, you agree to maintain a respectful and inclusive environment for all contributors.

## How to Contribute

### Reporting Bugs

If you find a bug, please open an issue with:
- A clear, descriptive title
- Steps to reproduce the bug
- Expected vs. actual behavior
- Your browser and OS information
- Screenshots if applicable

### Suggesting Features

We welcome feature suggestions! Please open an issue with:
- A clear description of the feature
- Why it would be useful
- How it aligns with the vibe coding philosophy

### Contributing Code

1. **Fork the repository** and clone it locally
2. **Create a branch** for your changes:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes** following our coding standards
4. **Test your changes** thoroughly
5. **Commit your changes** with clear, descriptive messages
6. **Push to your fork** and open a Pull Request

### Pull Request Process

1. Update the README.md if needed
2. Ensure your code follows the existing style
3. Test on multiple browsers if making UI changes
4. Ensure accessibility standards are maintained
5. Update documentation for new features
6. Wait for review and address any feedback

## Development Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Make your changes and test locally

## Coding Standards

### TypeScript/React

- Use TypeScript for type safety
- Follow React best practices
- Use functional components with hooks
- Keep components focused and reusable

### Styling

- Use Tailwind CSS utility classes
- Follow the existing design system
- Maintain dark mode support
- Ensure responsive design

### Accessibility

- Use semantic HTML
- Include ARIA labels where needed
- Ensure keyboard navigation works
- Maintain color contrast ratios (WCAG AA minimum)
- Test with screen readers when possible

### Content

- Follow the vibe coding philosophy
- Write clear, beginner-friendly explanations
- Use markdown for content formatting
- Include code examples where helpful

## Project Structure

- `src/components/` - React components
- `src/vibeContent.ts` - All course content
- `src/index.css` - Global styles
- `tailwind.config.js` - Tailwind configuration
- `public/` - Static assets

## Adding Content

To add new sections or lessons:

1. Edit `src/vibeContent.ts`
2. Follow the existing structure
3. Use markdown for rich content
4. Include appropriate tags
5. Set realistic time estimates

## Questions?

Feel free to open an issue with questions or reach out to the maintainers.

Thank you for contributing to VibeCode School! 🎉

