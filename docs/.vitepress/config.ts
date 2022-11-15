import {DefaultTheme, defineConfig} from 'vitepress'
import ThemeableImage = DefaultTheme.ThemeableImage;

const logo: ThemeableImage = {light: 'logo.svg', dark: 'logo-dark.svg'};

export default defineConfig({
    title: 'Motor CMS',
    description: 'Opinionated headless framework based on Laravel',
    // appearance: false,
    base: '/docs/',
    lastUpdated: true,
    // Theme related configurations.
    themeConfig: {
        logo: logo,
        // nav: [
        //     {text: 'Guide', link: '/guide'},
        //     {
        //         text: 'Dropdown Menu',
        //         items: [
        //             {text: 'Item A', link: '/item-1'},
        //             {text: 'Item B', link: '/item-2'},
        //             {text: 'Item C', link: '/item-3'}
        //         ]
        //     }
        // ],
        sidebar: [
            {
                text: 'Introduction',
                items: [
                    {text: 'Why another CMS?', link: '/introduction/why-another-cms'},
                ]
            },
            {
                text: 'Headless backend',
                items: [
                    {text: 'Installation', link: '/headless-backend/installation'},
                    {text: 'Included modules', link: '/headless-backend/included-modules'},
                    {text: 'Packages', link: '/headless-backend/packages'},
                    {text: 'Generating modules', link: '/headless-backend/generating-modules'},
                ]
            },
            {
                text: 'Admin frontend',
                items: [
                    {text: 'Installation', link: '/admin-frontend/installation'},
                    {text: 'Included modules', link: '/admin-frontend/included-modules'},
                    {text: 'Packages', link: '/admin-frontend/packages'},
                    {text: 'Generating modules', link: '/admin-frontend/generating-modules'},
                ]
            }
        ],
        socialLinks: [
            {icon: 'github', link: 'https://github.com/motor-cms/motor-template'},
        ],
        footer: {
            message: 'Ask us about commercial licensing.',
            copyright: 'Copyright © 2018-present Reza Esmaili'
        },
        lastUpdatedText: 'Updated Date'

    }
})
