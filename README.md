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

### Importing from Obsidian

This site supports importing content from Obsidian vault notes with the following workflow:

1. **Create blog post**: Copy Obsidian note content to `src/content/blog/[short-slug]/index.mdx`
2. **Migrate images**: Copy referenced images to `src/content/blog/[post]/images/` alongside the post
3. **Convert syntax**: Transform Obsidian `![[image.jpg]]` syntax to `<FigureImage imageSrc={import('./images/image.jpg')} ... />`
4. **Add frontmatter**: Include required `title`, `description`, and `date` fields
5. **Format captions**: Use HTML `<em>` tags for italicized titles in image captions

**Style preferences**:
- Use short, memorable URL slugs (e.g., `/farber` vs `/manny-farbers-rhizome`)
- Store images locally with each post in `images/` subdirectory (follows Astro recommendations)
- **Caption formatting**: Use HTML `<em>` tags for italics, not markdown `*asterisks*` (which display as visible text)

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