declare global {
	type OpenGraph =
		| (OpenGraphBase & {
				type?: "article";
				article: ArticleOpenGraph;
		  })
		| (OpenGraphBase & {
				type?: "profile";
				profile: ProfileOpenGraph;
		  })
		| (OpenGraphBase & {
				type?: "website";
		  });

	type OpenGraphBase = {
		/**
		 * The title of your object as it should appear within the graph, e.g., "The Rock".
		 */
		title?: string;
		/**
		 * The type of your object, e.g., "video.movie". Depending on the type you specify, other properties may also be required.
		 */
		type?: "article" | "book" | "profile" | "product" | "website";
		/**
		 * A one to two sentence description of your object.
		 */
		description?: string;
		/**
		 * The canonical URL of your object that will be used as its permanent ID in the graph, e.g., "https://www.imdb.com/title/tt0117500/".
		 */
		url?: string;
		/**
		 * The word that appears before this object's title in a sentence. An enum of (a, an, the, "", auto). If auto is chosen, the consumer of your data should chose between "a" or "an". Default is "" (blank).
		 */
		determiner?: string;
		/**
		 * The locale these tags are marked up in. Of the format language_TERRITORY. Default is en_US.
		 */
		locale?: string;
		/**
		 * An array of other locales this page is available in.
		 */
		localeAlternate?: string[];
		/**
		 * A URL to an audio file to accompany this object.
		 */
		audio?: AudioOpenGraph;
		/**
		 * An image URL which should represent your object within the graph.
		 */
		image?: ImageOpenGraph;
		/**
		 * A URL to a video file that complements this object.
		 */
		video?: VideoOpenGraph;
	};

	type AudioOpenGraph = {
		url: string;
		/**
		 * An alternate url to use if the webpage requires HTTPS.
		 */
		secureUrl?: string;
		/**
		 * The MIME type.
		 */
		type?: string;
	};

	type ImageOpenGraph = {
		url: string;
		/**
		 * An alternate url to use if the webpage requires HTTPS.
		 */
		secureUrl?: string;
		/**
		 * The MIME type.
		 */
		type?: string;
		/**
		 * The number of pixels wide.
		 */
		width?: number;
		/**
		 * The number of pixels high.
		 */
		height?: number;
		/**
		 * A description of what is in the image (not a caption).
		 */
		alt: string;
	};

	type VideoOpenGraph = ImageOpenGraph;

	type ArticleOpenGraph = {
		/**
		 * When the article was first published.
		 */
		publishedTime?: string;
		/**
		 * When the article was last changed.
		 */
		modifiedTime?: string;
		/**
		 * When the article is out of date after.
		 */
		expirationTime?: string;
		/**
		 * Writers of the article.
		 */
		author?: ProfileOpenGraph[];
		/**
		 * A high-level section name. E.g. Technology.
		 */
		section?: string;
		/**
		 * Tag words associated with this article.
		 */
		tag?: string[];
	};

	type ProfileOpenGraph = {
		/**
		 * A name normally given to an individual by a parent or self-chosen.
		 */
		firstName?: string;
		/**
		 * A name inherited from a family or marriage and by which the individual is commonly known.
		 */
		lastName?: string;
		/**
		 * A short unique string to identify them.
		 */
		username?: string;
		/**
		 * Their gender.
		 */
		gender?: "male" | "female";
	};
}
export {};
