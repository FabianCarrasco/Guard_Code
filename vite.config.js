import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue'
import checker from "vite-plugin-checker";
import vueDevTools from 'vite-plugin-vue-devtools'
import path from 'path'

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.ts'],
            ssr: 'resources/js/ssr.ts',
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false
                }
            }
        }),
        checker({
            typescript: {
                tsconfigPath: 'tsconfig.json',
                root: '.'
            },
            vueTsc: {
                root: '.',
                tsconfigPath: 'tsconfig.json',
            },
            overlay: true,
            terminal: true
        }),
        vueDevTools({
            appendTo: 'app.ts'
        })
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './resources/js'),
            'ziggy-js': '/vendor/tightenco/ziggy'
        }
    }
});
