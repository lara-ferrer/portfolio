export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
    external?: boolean;
    showButton?: boolean;
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
    title: 'Lara Ferrer - Design Systems specialist',
    subtitle: 'Lara Ferrer - Design Systems specialist',
    description: 'Lara Ferrer is a Design Systems specialist, living in Spain, with over 5 years of experience in developing web applications.',
    logo: {
        src: 'logo.png',
        alt: 'Logo'
    },
    hero: {
        text: "I'm **Lara Ferrer**, currently working as a **Front-end Developer** at **<a href='https://www.adidas.com/' target='_blank'>Adidas</a>**. Currently doing a BSc in Digital Design. Passionated about **UX Engineering**, which mixes the best of design and development worlds. I talk about **Design Systems and UX**. Follow me on <a href='https://www.linkedin.com/in/laraferrer/' target='_blank'>LinkedIn</a> and <a href='https://x.com/lara__ferrer' target='_blank'>Twitter/X</a>.",
        image: {
            src: 'hero.png',
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
            text: 'home',
            href: '/'
        },
        {
            text: 'my work',
            href: '/projects'
        },
        {
            text: 'media',
            href: '/media'
        },
        {
            text: 'join my newsletter',
            href: 'https://thesystemicdesigner.substack.com/',
            external: true
        },
        {
            text: 'contact',
            href: '/contact',
            showButton: true
        }
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        }
    ],
    socialLinks: [
        {
            text: 'LinkedIn',
            href: 'https://www.linkedin.com/in/laraferrer/'
        },
        {
            text: 'Substack',
            href: 'https://thesystemicdesigner.substack.com/'
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
