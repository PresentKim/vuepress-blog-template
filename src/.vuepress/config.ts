import {defineConfig} from "vuepress/config";

export default defineConfig(ctx => ({
    title: 'VuePress Blog',
    description: 'My Blog',
    base: "/vuepress-blog/",
    head: [
        ['link', {rel: 'icon', href: '/img/icon.svg'}],
        ['meta', {name: 'viewport', content: 'initial-scale=1,width=device-width'}],
    ],
    themeConfig: {
        smoothScroll: true,
        logo: '/img/icon.svg'
    },
    evergreen: !ctx.isProd
}));