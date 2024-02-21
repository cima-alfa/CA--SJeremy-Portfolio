import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://portfolio.sjeremy.dev',
	compressHTML: false,
	inlineStylesheets: 'never',
	trailingSlash: 'always',
	i18n: {
		defaultLocale: 'en',
		locales: ['es', 'en', 'cs'],
		routing: {
			prefixDefaultLocale: false
		}
	}
});
