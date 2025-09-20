# Justin Murphy Studio

Personal website and blog for Justin Murphy, built with Astro Nano theme.

## 🌐 Live Site

Visit [justinmurphy.studio](https://justinmurphy.studio)

## 📋 Features

- ✅ 100/100 Lighthouse performance
- ✅ Responsive
- ✅ Accessible
- ✅ SEO-friendly
- ✅ Typesafe
- ✅ Minimal style
- ✅ Light/Dark Theme
- ✅ Animated UI
- ✅ Tailwind styling
- ✅ Auto generated sitemap
- ✅ Auto generated RSS Feed
- ✅ Markdown support
- ✅ MDX Support (components in your markdown)

## 🎨 Customizations

This site includes several customizations built on the Astro Nano theme:

- **Custom theme system**: Centralized theming in `src/consts.ts` with extensive color and layout customization
- **Enhanced image handling**: `FigureImage` component for optimized blog post images with captions
- **Custom branding**: Dark green and gold color scheme with responsive design
- **Paper-style layouts**: Elevated card styling for content pages

## 📄 Configuration

Site configuration is managed in `src/consts.ts` including:
- Site metadata and social links
- Theme customization (colors, layouts, typography)
- Content display settings

For detailed development guidance, see [CLAUDE.md](CLAUDE.md).

## 📝 Content Workflow

### Blog posts with images (MDX required)

- **Use MDX** for any post that includes images or components. Save as `src/content/blog/[slug]/index.mdx`.
- **Colocate images** in `src/content/blog/[slug]/images/`.
- **Use the `FigureImage` component** for consistent styling, optimization, and captions.

Example usage inside `index.mdx`:

```mdx
import FigureImage from '@/components/FigureImage.astro';

<FigureImage 
  imageSrc={import('./images/my-image.png')} 
  alt="Describe the image for accessibility." 
  caption="Optional caption; supports HTML like <em>italics</em>." 
/>
```

Notes:
- `FigureImage` already opts out of typography overrides via `not-prose`; no extra classes needed.
- Use meaningful, specific `alt` text.
- Prefer PNG/JPG sources; Astro will output optimized formats.

### Text-only posts (optional Markdown)

- You may use `.md` only for simple, text-only posts without components.
- If you must include a basic image in Markdown, use standard syntax. This will not use our custom styling/captioning:

```md
![Alt text](./images/my-image.png)
```

### Image locations

- **Default (recommended)**: Store post images under `src/content/blog/[slug]/images/` (optimized by Astro).
- **Public assets**: Only for files that must bypass optimization (favicons, social images). Reference with root paths like `/social-card.png`.

### Creating a new post (checklist)

1. Create directory: `src/content/blog/[slug]/`
2. Add `index.mdx` with frontmatter:
   ```yaml
   ---
   title: "My Post Title"
   description: "Short SEO description"
   date: YYYY-MM-DD
   slug: "optional-custom-slug"
   ---
   ```
3. Create `images/` and add local images.
4. Import and use `FigureImage` for each image.
5. Run `npm run build` to catch frontmatter/schema issues.

## 💻 Commands

All commands are run from the root of the project, from a terminal:

Replace npm with your package manager of choice.

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run dev:network`     | Starts local dev server on local network         |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run preview:network` | Preview build on local network                   |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
| `npm run lint`            | Run ESLint                                       |
| `npm run lint:fix`        | Auto-fix ESLint issues                           |

## 🏛️ License

MIT