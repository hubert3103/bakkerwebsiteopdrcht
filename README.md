# Bakkerij het witte bolletje

A modern, scalable web application built with [Next.js](https://nextjs.org), TypeScript, Tailwind CSS, and Shadcn UI. This project follows best practices for maintainability, accessibility, and performance.

## Description
This website is a dynamic, responsive platform designed to showcase modern web development practices. It features server-side rendering, type safety, accessible UI.

## Features
- ⚡️ Server-side rendering (SSR) & static site generation (SSG)
- 🛠 TypeScript for type safety
- 🎨 Tailwind CSS for utility-first styling
- 🧩 Shadcn UI & Radix UI for accessible, composable components
- 🌐 Internationalization (i18n) with next-i18next
- 🗂 Component-driven architecture
- 🧪 Jest & React Testing Library for testing
- ♿️ Accessibility-first design
- 🔒 Security best practices

## Tech Stack
- [Next.js](https://nextjs.org)
- [React](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Shadcn UI](https://ui.shadcn.com)
- [Radix UI](https://www.radix-ui.com)
- [next-i18next](https://github.com/i18next/next-i18next)
- [Jest](https://jestjs.io), [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm

### Installation
```bash
# Clone the repository
 git clone <repo-url>
 cd <project-directory>

# Install dependencies
 npm install
```

### Development
```bash
npm run dev
```
Visit [http://localhost:3000](http://localhost:3000) to view the app.

### Build & Production
```bash
npm run build
npm start
```

### Deployment
- Deploy easily on [Vercel](https://vercel.com/new) or any Node.js hosting platform.
- See [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying).

## Project Structure
```
app/            # App Router pages & layouts
components/     # Reusable UI components
hooks/          # Custom React hooks
styles/         # Tailwind & global styles
public/         # Static assets
lib/            # Utilities & helpers
__tests__/      # Unit & integration tests
```

## Conventions & Best Practices
- **TypeScript**: Strict mode, interfaces for props/state, utility types
- **Naming**: PascalCase for components, camelCase for variables/functions, kebab-case for files/dirs
- **Styling**: Tailwind CSS, mobile-first, dark mode, accessible color contrast
- **Components**: Functional, composable, use custom hooks for logic
- **State**: useState/useReducer for local, Redux Toolkit for global
- **Validation**: Zod for schema validation, React Hook Form for forms
- **Testing**: Jest & React Testing Library, Arrange-Act-Assert pattern
- **Accessibility**: Semantic HTML, ARIA, keyboard navigation, logical headings
- **Security**: Input sanitization (DOMPurify), proper authentication
- **i18n**: next-i18next, locale detection, RTL support

## Accessibility & Security
- Semantic HTML & ARIA attributes
- Full keyboard navigation
- Accessible color contrast
- Input sanitization with DOMPurify
- Error boundaries for graceful error handling

## Testing
```bash
npm run test
```
- Unit & integration tests with Jest & React Testing Library
- Mock external dependencies

## Internationalization (i18n)
- [next-i18next](https://github.com/i18next/next-i18next) for translations
- Locale detection, number/date/currency formatting

## Contribution
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes
4. Open a pull request

Please follow the code style and best practices outlined above.

## License
[MIT](LICENSE)

## Resources
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Shadcn UI Docs](https://ui.shadcn.com/docs)
- [Radix UI Primitives](https://www.radix-ui.com/primitives/docs/overview/getting-started)
- [Jest Docs](https://jestjs.io/docs/getting-started)
- [React Testing Library Docs](https://testing-library.com/docs/)
