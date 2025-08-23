import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_BDivEL1B.mjs';
import { manifest } from './manifest_BZt_OR3V.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["src/pages/index.astro", _page0]
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
