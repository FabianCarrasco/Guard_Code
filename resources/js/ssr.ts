import {createSSRApp, h, DefineComponent} from "vue";
import {renderToString} from "@vue/server-renderer";
import {createInertiaApp} from "@inertiajs/vue3";
import createServer from "@inertiajs/vue3/server"

createServer((page) =>
    createInertiaApp({
        page,
        render: renderToString,
        title: (title) => `${title}`,
        resolve: (name) => {
            const pages = import.meta.glob('./Pages/**/*.vue', {eager: true})
            return pages [`./Pages/${name}.vue`] as DefineComponent
        },
        setup ({App, props, plugin}) {
            return createSSRApp({
                render: () => h(App, props),
            }).use(plugin)
        }
    })
)
