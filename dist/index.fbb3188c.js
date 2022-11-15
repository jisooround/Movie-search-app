// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"3Unyy":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "106c69fefbb3188c";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"bDbGG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _renderMoviesJs = require("./renderMovies.js");
var _renderMoviesJsDefault = parcelHelpers.interopDefault(_renderMoviesJs);
var _getMoviesJs = require("./getMovies.js");
var _getMoviesJsDefault = parcelHelpers.interopDefault(_getMoviesJs);
const yearEl = document.getElementById("year-select");
const inputEl = document.getElementById("search-input");
const buttonEl = document.getElementById("search-btn");
const moreBtnEl = document.getElementById("more-btn");
const movieFeed = document.getElementById("movieFeed");
const spans = document.querySelectorAll("span");
const sections = document.getElementsByClassName("section");
const introTop = sections[0].offsetTop;
const mainTop = sections[1].offsetTop;
const errorEl = document.getElementById("error");
const searchMessageEl = document.getElementById("search-message");
const totalMessage = document.getElementById("total-message-text");
let page = 1;
yearList();
// 스크롤 이벤트
spans[0].onclick = function() {
    window.scroll({
        top: introTop,
        behavior: "smooth"
    });
};
spans[1].onclick = function() {
    window.scroll({
        top: introTop,
        behavior: "smooth"
    });
};
spans[2].onclick = function() {
    window.scroll({
        top: mainTop,
        behavior: "smooth"
    });
};
spans[3].onclick = function() {
    window.scroll({
        top: document.body.scrollHeight,
        left: 0,
        behavior: "smooth"
    });
};
spans[4].onclick = function() {
    window.scroll({
        top: mainTop,
        behavior: "smooth"
    });
};
// 최초 검색
buttonEl.addEventListener("click", searchMoviesFirst);
async function searchMoviesFirst() {
    movieFeed.innerHTML = "";
    searchMessageEl.classList.add("none");
    const year = yearEl.options[yearEl.selectedIndex].value;
    const typeEl = document.getElementById("type-select");
    const type = typeEl.options[typeEl.selectedIndex].value;
    const countEl = document.getElementById("count-select");
    page = countEl.options[countEl.selectedIndex].value;
    const title = inputEl.value;
    totalMessage.classList.add("none");
    // 콘솔 확인
    // console.log(title);
    // console.log(type);
    // console.log(year);
    for(let i = 1; i <= page; i++)try {
        const { Search: movies , totalResults  } = await (0, _getMoviesJsDefault.default)(title, i, type, year);
        const total = Math.ceil(Number(totalResults) / 10);
        (0, _renderMoviesJsDefault.default)(movies);
        renderMoreBtn(totalResults);
        errorEl.classList.remove("display");
        // 콘솔 확인
        // console.log(total);
        // console.log(totalResults);
        // 결과가 요청하는 페이지보다 작다면 break
        if (total < page) {
            totalMessage.classList.remove("none");
            totalMessage.textContent = `💬 The search results are  ${totalResults}.`;
            break;
        }
    } catch (error) {
        moreBtnEl.classList.remove("active");
        errorEl.classList.add("display");
    // console.log(error);
    }
    return page;
}
// input창에서 enter키 입력 시 search 버튼 클릭 기능
inputEl.addEventListener("keyup", searchEnter);
function searchEnter(event) {
    if (event.keyCode === 13) searchMoviesFirst();
}
// 더보기 버튼 클릭시 page수 추가하여 요청
moreBtnEl.addEventListener("click", async ()=>{
    page++;
    const title = inputEl.value;
    // 콘솔 확인
    // console.log(page);
    // console.log(title);
    try {
        const { Search: movies , totalResults  } = await (0, _getMoviesJsDefault.default)(title, page);
        (0, _renderMoviesJsDefault.default)(movies);
        renderMoreBtn(totalResults);
    // 콘솔 확인
    // console.log(movies);
    } catch (error) {
        console.log(error);
    }
});
// 남은 결과가 있을 때 버튼 노출
function renderMoreBtn(totalResults) {
    const total = Math.ceil(Number(totalResults) / 10);
    if (page < total) moreBtnEl.classList.add("active");
    else moreBtnEl.classList.remove("active");
}
// 년도 리스트 생성
function yearList() {
    let date = new Date();
    let currentYear = date.getFullYear();
    for(let i = currentYear; i >= 1980; i--){
        const yearLiEl = document.createElement("option");
        yearLiEl.classList.add("year-option");
        yearLiEl.innerText = i;
        yearLiEl.value = `${i}`;
        yearEl.appendChild(yearLiEl);
    // 콘솔 확인
    // console.log(yearLiEl.innerHTML);
    // console.log(yearLiEl.value);
    }
}

},{"./renderMovies.js":"jRXR4","./getMovies.js":"4PkgS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jRXR4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _detailJs = require("./detail.js");
var _detailJsDefault = parcelHelpers.interopDefault(_detailJs);
function renderMovies(movies) {
    for (let movie of movies){
        const movieEl = document.createElement("div");
        movieEl.className = "group";
        const imgDivEl = document.createElement("div");
        imgDivEl.className = "group__imgdiv";
        const infoDivEl = document.createElement("div");
        infoDivEl.className = "group__infodiv";
        const titleEl = document.createElement("h4");
        titleEl.className = "group__infodiv__title";
        const yearEl = document.createElement("p");
        yearEl.className = "group__infodiv__year";
        const detailEl = document.createElement("div");
        detailEl.className = "group__infodiv__detail";
        detailEl.innerText = "+";
        imgDivEl.style.backgroundImage = `url(${movie.Poster})`;
        titleEl.innerText = `${movie.Title}`;
        yearEl.innerText = `${movie.Year}`;
        if (`${movie.Poster}` === "N/A") imgDivEl.style.backgroundImage = `url(https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png)`;
        // detail 버튼 클릭 시 detail 정보 불러오기
        detailEl.addEventListener("click", ()=>{
            (0, _detailJsDefault.default)(movie);
            document.querySelector("#detail-container").classList.add("display");
            document.querySelector(".message").classList.add("none");
        });
        infoDivEl.appendChild(titleEl);
        infoDivEl.appendChild(yearEl);
        infoDivEl.appendChild(detailEl);
        movieEl.appendChild(imgDivEl);
        movieEl.appendChild(infoDivEl);
        movieFeed.appendChild(movieEl);
    }
}
exports.default = renderMovies;

},{"./detail.js":"4GyQM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4GyQM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getDetailJs = require("./getDetail.js");
var _getDetailJsDefault = parcelHelpers.interopDefault(_getDetailJs);
var _renderDetailJs = require("./renderDetail.js");
var _renderDetailJsDefault = parcelHelpers.interopDefault(_renderDetailJs);
async function detail(movie) {
    const id = movie.imdbID;
    try {
        const details = await (0, _getDetailJsDefault.default)(id);
        // 콘솔 확인
        // console.log(details);
        // console.log('detail : '+id);
        (0, _renderDetailJsDefault.default)(details);
    } catch (error) {
        console.log(error);
    }
}
exports.default = detail;

},{"./getDetail.js":"89Wei","./renderDetail.js":"h7iLH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"89Wei":[function(require,module,exports) {
// 영화 상세 내용 불러오기
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
async function getDetail(id = "") {
    return new Promise((resolve, reject)=>{
        fetch(`https://omdbapi.com/?apikey=7035c60c&i=${id}&plot=sho`).then((res)=>res.json()).then((res)=>resolve(res)).then((json)=>{
            if (json.Response === "False") reject(json.Error);
            resolve(json);
        }).catch((error)=>{
            reject(error);
        });
    });
}
exports.default = getDetail;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"h7iLH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function renderDetail(details) {
    const bgEl = document.getElementById("detail-bg");
    const posterEl = document.getElementById("img-wrap");
    document.getElementById("detail-title").innerText = `${details.Title}`;
    document.getElementById("detail-released").innerText = `${details.Released}`;
    document.getElementById("detail-plot").innerText = `${details.Plot}`;
    document.getElementById("actors").innerText = `${details.Actors}`;
    document.getElementById("director").innerText = `${details.Director}`;
    document.getElementById("genre").innerText = `${details.Genre}`;
    posterEl.style.backgroundImage = `url(${details.Poster})`;
    bgEl.style.backgroundImage = `url(${details.Poster})`;
    if (`${details.Poster}` === "N/A") posterEl.style.backgroundImage = `url(https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png)`;
    const ratingsInfo = document.getElementById("ratings-info");
    ratingsInfo.innerHTML = "";
    // 평점 제공사와 결과 함께 보여주기
    for(let i = 0; i < details.Ratings.length; i++){
        const ratingEl = document.createElement("div");
        ratingEl.className = "rating";
        const logoEl = document.createElement("img");
        logoEl.className = "logo";
        const resultEl = document.createElement("p");
        resultEl.className = "result";
        logoEl.src = "/" + `${details.Ratings[i].Source}` + ".png";
        resultEl.textContent = `${details.Ratings[i].Value}`;
        ratingEl.append(logoEl, resultEl);
        ratingsInfo.append(ratingEl);
    }
    // 제공된 평점이 없을 경우 '결과 없음' 메세지
    if (details.Ratings.length === 0) {
        const ratingEl1 = document.createElement("div");
        ratingEl1.className = "rating";
        const logoEl1 = document.createElement("img");
        logoEl1.className = "logo";
        const resultEl1 = document.createElement("p");
        resultEl1.className = "result";
        resultEl1.innerHTML = "No rating results provided.";
        ratingEl1.append(resultEl1);
        ratingsInfo.append(ratingEl1);
    }
    window.scroll({
        top: document.body.scrollHeight,
        left: 0,
        behavior: "smooth"
    });
}
exports.default = renderDetail;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4PkgS":[function(require,module,exports) {
// 영화 검색 결과 불러오기
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
async function getMovies(title = "", page = 1, type = "", year = "") {
    return new Promise((resolve, reject)=>{
        fetch(`https://omdbapi.com/?apikey=7035c60c&s=${title}&page=${page}&type=${type}&y=${year}`).then((res)=>res.json()).then((res)=>resolve(res)).then((json)=>{
            if (json.Response === "False") reject(json.Error);
            resolve(json);
        }).catch((error)=>{
            reject(error);
        });
    });
}
exports.default = getMovies;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["3Unyy","bDbGG"], "bDbGG", "parcelRequire6017")

//# sourceMappingURL=index.fbb3188c.js.map
