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
- **Local storage**: Store images in `src/content/blog/[post]/images/` alongside content (per Astro recommendations)
- **Blog posts**: Use `FigureImage.astro` component for consistent styling and captions
- **Import pattern**: `<FigureImage imageSrc={import('./images/image.png')} alt="..." caption="..." />`
- **Caption formatting**: Use HTML `<em>` tags for italicized artwork titles in captions
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

## Obsidian to Blog Workflow

### Converting Obsidian Notes to Blog Posts

When importing content from Obsidian vault notes:

1. **Directory Structure**:
   - Create blog post directory: `src/content/blog/[short-slug]/`
   - Use short, simple slugs (e.g., `/farber` instead of `/manny-farbers-rhizome`)
   - Create `index.mdx` file for the post content

2. **Image Migration**:
   - Copy all referenced images to `src/content/blog/[post]/images/`
   - Update Obsidian image syntax `![[image.jpg]]` to FigureImage components
   - Convert to: `<FigureImage imageSrc={import('./images/image.jpg')} alt="..." caption="..." />`

3. **Frontmatter Setup**:
   ```yaml
   ---
   title: "Post Title"
   description: "Brief description for SEO and previews"
   date: YYYY-MM-DD
   ---
   ```

4. **Content Formatting**:
   - Add FigureImage import: `import FigureImage from "@components/FigureImage.astro"`
   - Convert Obsidian image syntax to FigureImage components
   - Use HTML `<em>` tags in captions for italicized artwork/book titles
   - Preserve blockquotes and markdown formatting

5. **Component Configuration**:
   - FigureImage component uses `set:html` for caption rendering to support HTML formatting
   - Captions support HTML elements like `<em>` for italics

### Style Preferences
- **Slugs**: Use single word slugs when possible (prefer `/ivf` over `/ivf-embryo-selection`, `/farber` over `/manny-farbers-rhizome`)
- **Images**: Store locally with each post in `images/` subdirectory (follows Astro best practices)
- **Captions**: Use semantic HTML (`<em>` for emphasis) rather than markdown syntax
- **Import paths**: Use relative `./images/` paths for blog post images

### Known Issues & Solutions
- **MDX parsing**: Avoid complex inline CSS in MDX files; use Tailwind classes or component styling
- **Caption italics**: 
  - ❌ **Wrong**: Markdown `*italics*` syntax displays as visible asterisks
  - ✅ **Correct**: Use HTML `<em>` tags in captions for proper italics
  - **Why**: FigureImage component uses `set:html` directive to render HTML in captions
  - **Example**: `caption="<em>Night and Day</em>, 1990"` renders italics correctly
- **TOC integration**: Standard markdown headings work with TableOfContents component; avoid invisible headers for images