import {defineConfig} from "vuepress/config";

export default defineConfig(ctx => ({
    title: 'VuePress Blog',
    description: 'My Blog',
    base: "/vuepress-blog/",
    head: [
        ['link', {rel: 'icon', href: '/img/icon.svg'}]
    ],
    themeConfig: {
        smoothScroll: true,
        logo: '/img/icon.svg'
    },
    evergreen: !ctx.isProd
}));