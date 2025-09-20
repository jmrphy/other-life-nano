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
- **Blog posts**: Use MDX (`index.mdx`) for any post with images or components. Markdown (`.md`) is only acceptable for simple text-only posts.
- **Images**: Colocate under `src/content/blog/[post]/images/` for Astro optimization.
- **FigureImage component**: Required for blog images to ensure optimization, captions, and consistent styling.
- **Import pattern**:
  ```mdx
  import FigureImage from "@/components/FigureImage.astro";
  <FigureImage imageSrc={import('./images/image.png')} alt="..." caption="..." />
  ```
- **Frontmatter**: `title`, `description`, `date` (Zod schema enforced). Optional `draft`, `slug`.

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
- **Local storage (preferred)**: `src/content/blog/[post]/images/`.
- **Public assets**: Only for non-optimized files in `public/`; reference with `/file.png` and note no captions/styling.
- **Styling**: `FigureImage` includes `not-prose` internally to avoid Tailwind Typography overrides.
- **Accessibility**: Provide meaningful `alt` text.

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

1.  **Directory Structure**:
    -   Create a directory for the new post, e.g., `src/content/blog/your-post-slug/`.
    -   Inside this directory, create an `index.mdx` file for the post's content.
    -   Also create an `images/` subdirectory: `src/content/blog/your-post-slug/images/`.

2.  **Image Migration**:
    -   Copy all images referenced in the note to the newly created `images/` subdirectory.
    -   Update Obsidian's image syntax `![[image.jpg]]` to use the `FigureImage` component.
    -   The correct format is: `<FigureImage imageSrc={import('./images/image.jpg')} alt="description" caption="caption text" />`.

3.  **Frontmatter Setup**:
    -   Ensure the `index.mdx` file has the required frontmatter:
        ```yaml
        ---
        title: "Post Title"
        description: "Brief description for SEO and previews"
        date: YYYY-MM-DD
        ---
        ```

4.  **Content Formatting**:
    -   Add the `FigureImage` import statement at the top of your `index.mdx` file: `import FigureImage from "@components/FigureImage.astro";`.
    -   Convert all Obsidian image links to `FigureImage` components as described above.
    -   Use HTML `<em>` tags within captions for italicizing titles of artworks or books.
    -   Preserve existing blockquotes and other Markdown formatting.

5. **Component Configuration**:
   - FigureImage component uses `set:html` for caption rendering to support HTML formatting
   - Captions support HTML elements like `<em>` for italics

### Style Preferences
- **Slugs**: Use single word slugs when possible (prefer `/ivf` over `/ivf-embryo-selection`, `/farber` over `/manny-farbers-rhizome`)
- **Images**: Store locally with each post in `images/` subdirectory (follows Astro best practices)
- **Captions**: Use semantic HTML (`<em>` for emphasis) rather than markdown syntax
- **Import paths**: Use relative `./images/` paths for blog post images

### Known Issues & Solutions
- **Components not rendering in a post**: Ensure the file is `.mdx`, not `.md`.
- **Custom image styles missing**: Use `FigureImage`. It already opts out of `prose` styles.
- **Caption italics**:
  - ❌ Wrong: Markdown `*italics*` inside captions
  - ✅ Correct: Use HTML `<em>` in captions (`FigureImage` renders caption with `set:html`)