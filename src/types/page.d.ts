import type { SchemaProps } from "astro-seo-schema";

declare global {
	/**
	 * Defines the SEO properties for a web page.
	 */
	type SeoPage = {
		/**
		 * The title of the page, displayed in the browser's title bar and search engine results.
		 */
		title: string;
		/**
		 * A brief description of the page's content, used in search engine results.
		 */
		description: string;
		/**
		 * The canonical URL of the page, used to prevent duplicate content issues.
		 * @default new URL(Astro.url.pathname, Astro.site)
		 */
		canonical?: string;
		/**
		 * Custom robots meta tag content. Ex: "noindex, nofollow" or "noindex, follow".
		 * @default "index, follow"
		 */
		robots?: string;
		/**
		 * Open Graph metadata for social media sharing.
		 * Optional.
		 */
		og?: OpenGraph;
		/**
		 * Twitter metadata for Twitter card display.
		 * Optional.
		 */
		twitter?: TwitterCard;
		/**
		 * Schema.org metadata for structured data.
		 * Optional.
		 */
		schema?: SchemaProps;
	};
}
export {};
