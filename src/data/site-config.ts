export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
    mediaPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: 'Lara Ferrer',
    subtitle: 'Minimal Astro.js theme',
    description: 'Astro.js and Tailwind CSS theme for blog and portfolio by justgoodui.com',
    logo: {
        src: 'logo.png',
        alt: 'Logo'
    },
    hero: {
        text: "I'm **Lara Ferrer**, currently working as a **Software Developer** at **<a href='https://www.adidas.com/' target='_blank'>Adidas</a>**. Currently doing a BSc in Digital Design. Passionated about **UX Engineering**, which mixes the best of design and development worlds. I talk about **Design Systems, UX and Performance**. Follow me on <a href='https://www.linkedin.com/in/laraferrer/' target='_blank'>LinkedIn</a> and <a href='https://x.com/lara__ferrer' target='_blank'>Twitter/X</a>.",
        image: {
        src: 'hero.jpg',
        alt: 'Hero banner'
        },
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Projects',
            href: '/projects'
        },
        {
            text: 'Media',
            href: '/media'
        }
/*         {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'Tags',
            href: '/tags'
        } */
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        },
    ],
    socialLinks: [
        {
            text: 'LinkedIn',
            href: 'https://www.linkedin.com/in/laraferrer/'
        },
        {
            text: 'X/Twitter',
            href: 'https://x.com/lara__ferrer'
        }
    ],
/*     subscribe: {
        title: 'Subscribe to Dante Newsletter',
        text: 'One update per week. All the latest posts directly in your inbox.',
        formUrl: '#'
    }, */
    postsPerPage: 8,
    projectsPerPage: 8,
    mediaPerPage: 8
};

export default siteConfig;
