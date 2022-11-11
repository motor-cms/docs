import {DefaultTheme, defineConfig} from 'vitepress'
import ThemeableImage = DefaultTheme.ThemeableImage;

const logo: ThemeableImage = {light: '/logo.svg', dark: 'logo-dark.svg'};

export default defineConfig({
    title: 'Motor CMS',
    description: 'Just playing around.',
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
                    {text: 'What is Motor CMS?', link: '/index'},
                    {text: 'Getting Started', link: '/introduction/getting-started'},
                    {text: 'Additional packages', link: '/introduction/additional-packages'},
                ]
            },
            {
                text: 'Modules',
                items: [
                    {text: 'Included modules', link: '/modules/included-modules'},
                    {text: 'Generating modules', link: '/modules/generating-modules'},
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
