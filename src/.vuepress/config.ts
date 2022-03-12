import type {DefaultThemeOptions} from 'vuepress'
import {defineUserConfig} from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
    title: 'VuePress Blog',
    description: 'My Blog',
    base: "/vuepress-blog/",
    head: [
        ['link', {rel: 'icon', href: '/img/icon.svg'}],
        ['meta', {name: 'viewport', content: 'initial-scale=1,width=device-width'}],
    ],
    themeConfig: {
        smoothScroll: true,
        logo: '/img/icon.svg',

        contributors: false,
        docsDir: 'src',
        repo: 'https://github.com/PresentKim/vuepress-blog',
    }
});