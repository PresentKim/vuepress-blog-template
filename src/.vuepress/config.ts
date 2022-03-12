import type {DefaultThemeOptions} from 'vuepress'
import {defineUserConfig} from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
    title: 'VuePress Blog',
    description: 'My Blog',
    base: '/vuepress-blog/',
    head: [
        ['meta', {name: 'viewport', content: 'initial-scale=1,width=device-width'}],
        ['link', {rel: 'icon', type: 'image/svg+xml', href: '/logo.svg', sizes: 'any'}],
        ['link', {rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon/16x16.png'}],
        ['link', {rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon/32x32.png'}],
        ['link', {rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon/96x96.png'}],
        ['link', {rel: 'icon', type: 'image/png', sizes: '192x192', href: '/favicon/192x192.png'}],
        ['link', {rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon/180x180.png'}],
        ['link', {rel: 'apple-touch-icon', sizes: '57x57', href: '/favicon/57x57.png'}],
        ['link', {rel: 'apple-touch-icon', sizes: '60x60', href: '/favicon/60x60.png'}],
        ['link', {rel: 'apple-touch-icon', sizes: '72x72', href: '/favicon/72x72.png'}],
        ['link', {rel: 'apple-touch-icon', sizes: '76x76', href: '/favicon/76x76.png'}],
        ['link', {rel: 'apple-touch-icon', sizes: '114x114', href: '/favicon/114x114.png'}],
        ['link', {rel: 'apple-touch-icon', sizes: '120x120', href: '/favicon/120x120.png'}],
        ['link', {rel: 'apple-touch-icon', sizes: '144x144', href: '/favicon/144x144.png'}],
        ['link', {rel: 'apple-touch-icon', sizes: '152x152', href: '/favicon/152x152.png'}],
        ['link', {rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon/180x180.png'}],
        ['meta', {name: 'msapplication-square70x70logo', content: '/favicon/70x70.png'}],
        ['meta', {name: 'msapplication-TileImage', content: '/favicon/144x144.png'}],
        ['meta', {name: 'msapplication-square150x150logo', content: '/favicon/150x150.png'}],
        ['meta', {name: 'msapplication-wide310x150logo', content: '/favicon/310x150.png'}],
        ['meta', {name: 'msapplication-square310x310logo', content: '/favicon/310x310.png'}],
    ],
    themeConfig: {
        smoothScroll: true,
        logo: '/logo.svg',

        contributors: false,
        docsDir: 'src',
        repo: 'https://github.com/PresentKim/vuepress-blog',
    }
});