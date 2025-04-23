import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Other Life",
  EMAIL: "justin@otherlife.co",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Astro Nano is a minimal and lightweight blog and portfolio.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A collection of my projects, with links to repositories and demos.",
};

export const SOCIALS: Socials = [
  { 
    NAME: "twitter-x",
    HREF: "https://twitter.com/markhorn_dev",
  },
  { 
    NAME: "github",
    HREF: "https://github.com/markhorn-dev"
  },
  { 
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/markhorn-dev",
  }
];

/**
 * Theme Configuration
 * 
 * Custom theme settings and their original defaults.
 * 
 * Original Defaults:
 * - Container width: max-w-screen-sm (640px) on all screens
 * - Background colors: 
 *   - Light: bg-stone-100
 *   - Dark: bg-stone-900
 * - Home page background: Same as above (no special background)
 * - Container styles: No background or shadow
 */
export const THEME = {
  // Container widths
  container: {
    default: "max-w-screen-sm", // Original: max-w-screen-sm
    desktop: "lg:max-w-screen-md", // Original: none (was max-w-screen-sm on all screens)
  },
  
  // Background colors
  background: {
    default: {
      light: "bg-stone-100", // Original: bg-stone-100
      dark: "bg-stone-900", // Original: bg-stone-900
    },
    home: {
      light: "bg-[#fcde12]", // Original: same as default
      dark: "bg-[#fcde12]", // Original: same as default
    },
    content: {
      light: "bg-[#fcde12]", // For blog/page backgrounds
      dark: "bg-[#fcde12]",
    }
  },

  // Container styles
  paper: {
    background: "bg-white", // White background for paper effect
    shadow: "shadow-xl", // Large shadow for depth
    rounded: "rounded-lg", // Slightly rounded corners
    padding: "p-8 sm:p-12", // Comfortable padding, more on larger screens
  },
};
