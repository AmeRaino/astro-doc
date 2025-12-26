// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
    site: 'https://example.com',
    integrations: [
        starlight({
            title: 'Astro Documentation',
            description: 'Documentation site built with Astro and Starlight',
            sidebar: [
                {
                    label: 'Start Here',
                    items: [
                        { label: 'Introduction', link: '/introduction' },
                        { label: 'Getting Started', link: '/getting-started' },
                    ],
                },
            ],
        }),
        mdx(),
        sitemap(),
    ],
});