import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Justin Murphy",
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
  DESCRIPTION: "A collection of posts about my thoughts and experiences.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A collection of my projects, with links to repositories and demos.",
};

export const ABOUT: Metadata = {
  TITLE: "About",
  DESCRIPTION: "Learn more about me.",
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
      light: "bg-stone-100", // Light grey body background for default pages
      dark: "bg-stone-900", // Keep dark mode as is
    },
    home: {
      light: "bg-[#004929]", // Updated brand color
      dark: "bg-stone-900", // Updated from green to neutral dark stone for dark mode
    },
    content: {
      light: "bg-[#004929]", // Same dark green as page background for paper look pages
      dark: "bg-stone-900", // Keep dark mode as is
    }
  },

  // Header settings
  header: {
    opaque: true, // Set to false for a transparent header that shows the body background
    // Background colors for different page types
    background: {
      default: {
        light: "bg-green-50", // Light green navbar for default pages
        dark: "bg-stone-900", // Keep dark mode as is
      },
      content: {
        light: "bg-[#004929]", // Same dark green as page background for paper look pages
        dark: "bg-stone-900", // Keep dark mode as is
      }
    }
  },

  // Navigation link colors (header/navbar)
  navigation: {
    // Colors for default pages (like homepage)
    default: {
      links: {
        light: "text-[#004929]", // Brand dark green for default pages in light mode
        dark: "text-[#FFD700]",  // Keep gold yellow for dark mode
      },
      hover: {
        light: "hover:text-[#006B3D]", // Slightly lighter green on hover in light mode
        dark: "hover:text-[#FFA500]",  // Keep darker gold on hover in dark mode
      },
      title: {
        light: "text-[#004929]", // Brand dark green title for default pages in light mode
        dark: "text-[#FFD700]", // Gold title in dark mode
      },
      titleHover: {
        light: "hover:text-[#006B3D]", // Slightly lighter green on hover for title in light mode
        dark: "hover:text-[#FFA500]", // Darker gold on hover in dark mode
      }
    },
    // Colors for content pages (blog posts, etc.)  
    content: {
      links: {
        light: "text-white", // White text for content pages in light mode
        dark: "text-[#FFD700]",  // Keep gold yellow for dark mode
      },
      hover: {
        light: "hover:text-stone-200", // Subtle hover to light grey in light mode
        dark: "hover:text-[#FFA500]",  // Keep darker gold on hover in dark mode
      },
      title: {
        light: "text-white", // White title for content pages in light mode
        dark: "text-[#FFD700]", // Gold title in dark mode
      },
      titleHover: {
        light: "hover:text-stone-200", // Subtle hover for title in light mode
        dark: "hover:text-[#FFA500]", // Darker gold on hover in dark mode
      }
    }
  },

  // Homepage link colors (for "See all posts", social links, etc.)
  homepage: {
    links: {
      light: "text-[#004929]", // Dark green brand color for homepage links in light mode
      dark: "text-[#FFD700]",  // Gold yellow for homepage links in dark mode
    },
    hover: {
      light: "hover:text-[#006B3D]", // Slightly lighter green on hover in light mode
      dark: "hover:text-[#FFA500]",  // Slightly darker gold on hover in dark mode
    }
  },

  // Content hyperlink colors (for blog posts, articles, etc.)
  hyperlinks: {
    text: {
      light: "text-[#004929]", // Dark green brand color for light mode
      dark: "text-[#40E0D0]",  // Turquoise for better contrast in dark mode
    },
    hover: {
      light: "hover:text-[#006B3D]", // Slightly lighter green on hover in light mode
      dark: "hover:text-[#20B2AA]",  // Light sea green on hover in dark mode
    },
    decoration: {
      light: "decoration-[#004929]/30", // Semi-transparent dark green underlines in light mode
      dark: "decoration-[#40E0D0]/40", // Semi-transparent turquoise underlines in dark mode
    },
    decorationHover: {
      light: "hover:decoration-[#006B3D]/50", // Darker decoration on hover in light mode
      dark: "hover:decoration-[#20B2AA]/60",  // Darker decoration on hover in dark mode
    }
  },

  // Footer settings
  footer: {
    // Default footer background (for pages with light backgrounds)
    default: {
      light: "bg-transparent", // Transparent on light default backgrounds
      dark: "bg-transparent",  // Transparent on dark backgrounds
    },
    // Footer background for content pages (with dark green body background)
    content: {
      light: "bg-stone-100", // Light gray background when body is dark green
      dark: "bg-stone-800",  // Dark background for dark mode
    },
    text: {
      light: "text-stone-700", // Ensure footer text is visible on light backgrounds
      dark: "text-white",      // Pure white for better readability in dark mode
    }
  },

  // Container styles
  paper: {
    background: {
      light: "bg-white", // White background for paper effect in light mode
      dark: "bg-stone-800", // Updated: ensured paper uses a consistent neutral dark stone surface
    },
    shadow: {
      light: "shadow-xl", // Large shadow for depth in light mode
      dark: "shadow-xl",   // Large shadow for depth in dark mode
    },
    rounded: "rounded-lg", // Slightly rounded corners
    padding: "p-8 sm:p-12", // Comfortable padding, more on larger screens
  },
};
