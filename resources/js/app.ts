import './bootstrap';
import {createSSRApp, h, type DefineComponent} from "vue";
import {createInertiaApp} from "@inertiajs/vue3";
import {ZiggyVue} from 'ziggy-js'

createInertiaApp({
    title: (title) => `${title}`,
    resolve: name => {
        const pages = import.meta.glob('./Pages/**/*.vue', {eager: true})
        return pages[`./Pages/${name}.vue`] as DefineComponent
    },
    setup({el, App, props, plugin}) {
        createSSRApp({render: () => h(App, props)})
            .use(plugin)
            .use(ZiggyVue)
            .mount(el)
    }
})
