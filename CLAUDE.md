# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `npm run dev` - Start development server at localhost:4321
- `npm run dev:network` - Start dev server accessible on local network
- `npm run build` - Build production site (includes Astro type checking)
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Auto-fix ESLint issues

### Testing and Quality
Always run `npm run build` before committing to ensure TypeScript compilation and Astro checks pass.

## Architecture

This is an Astro-based static site generator with a blog and portfolio theme. Key architectural patterns:

### Content Management
- **Blog posts**: Located in `src/content/blog/` as MDX files (preferred) or Markdown
- **Content schema**: Defined in `src/content/config.ts` with Zod validation
- **Frontmatter**: Required fields are `title`, `description`, `date`; optional `draft` field

### Theme System
- **Centralized theming**: All customizations in `src/consts.ts` under the `THEME` object
- **Responsive containers**: Uses `THEME.container.default` (mobile/tablet) and `THEME.container.desktop`
- **Color schemes**: Light/dark mode variants for backgrounds, navigation, content, footer
- **Paper effect**: `Container` component with `paper` prop creates elevated card styling

### Layout Hierarchy
- `PageLayout.astro` - Base layout with header/footer
- `ContentLayout.astro` - Wraps content in paper-style container
- `HomeLayout.astro` - Specialized for homepage
- `Container.astro` - Responsive container with optional paper styling

### Image Handling
- **Preferred**: Store images in `src/content/blog/images/` for optimization
- **Blog posts**: Use `FigureImage.astro` component for consistent styling and captions
- **Import pattern**: `<FigureImage imageSrc={import('./images/image.png')} alt="..." caption="..." />`
- **Public assets**: Only for unprocessed files (favicons, etc.) in `public/`

### TypeScript Configuration
- Strict mode enabled with `astro/tsconfigs/strict`
- Path aliases: `@*` maps to `./src/*`
- Import pattern: `import { THEME } from "@consts"`

### Styling
- **Tailwind CSS**: Primary styling system with typography plugin
- **Custom fonts**: Inter (sans-serif) and Lora (serif) from Fontsource
- **Dark mode**: Class-based with `darkMode: ["class"]`
- **Safelist**: Includes stone-800/900 backgrounds for dynamic classes

### Content Types
- Site metadata in `src/consts.ts` (SITE, HOME, BLOG, ABOUT, SOCIALS)
- Utility functions in `src/lib/utils.ts` for date formatting and reading time
- Type definitions in `src/types.ts`