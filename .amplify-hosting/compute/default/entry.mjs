import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_BS_BH3kB.mjs';
import { manifest } from './manifest_MIMpJOiF.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/fallback.astro.mjs');
const _page1 = () => import('./pages/simple.astro.mjs');
const _page2 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["src/pages/fallback.astro", _page0],
    ["src/pages/simple.astro", _page1],
    ["src/pages/index.astro", _page2]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "client": "file:///Users/davidkellogg/projects/Memoresse_Brand&Marketing/memoresse-interactive-guidebook/.amplify-hosting/static/",
    "server": "file:///Users/davidkellogg/projects/Memoresse_Brand&Marketing/memoresse-interactive-guidebook/.amplify-hosting/compute/default/",
    "host": false,
    "port": 3000,
    "assets": "_astro"
};

const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { pageMap };
