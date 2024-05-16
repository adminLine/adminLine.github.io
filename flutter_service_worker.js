'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "02fb4b0b2c6e4fd3e2362fe9bf3cc4e8",
"index.html": "50d4a787449e05afab928939f9c642c7",
"/": "50d4a787449e05afab928939f9c642c7",
".firebase/hosting.cHVibGlj.cache": "256a91cd93d54d1f293d854a1159612a",
"main.dart.js": "d8986d59d55a806906647158efb15961",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "26f90d89bb1b1e6d6ca221a4c4641697",
"icons/Icon-192.png": "216a9f7f7dddb2dc9561d6404bfc6fa4",
"icons/Icon-maskable-192.png": "216a9f7f7dddb2dc9561d6404bfc6fa4",
"icons/Icon-maskable-512.png": "63bc11a2b8c93f33ad0dc300b3561cb7",
"icons/Icon-512.png": "63bc11a2b8c93f33ad0dc300b3561cb7",
"manifest.json": "84edefcb1d082babe5dcc30f92e6ba2f",
"firebase.json": "ceb3227e948a2fffb08892a8749cf74e",
"assets/AssetManifest.json": "4c633b9f37ecdae7199000011fdafb0d",
"assets/NOTICES": "130cd6256d8d3ad71bc297c7ef6a641b",
"assets/FontManifest.json": "695b400987698eb906b69df9111c19c8",
"assets/AssetManifest.bin.json": "b3c94a1a8c1f943f755d6aa864e6a135",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "8457e1297eddb272685cd65c164cd895",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "251f9ce26199a6fac3365ec974cf0bf4",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "f25e8e701660fb45e2a81ff3f43c6d5c",
"assets/packages/quickalert/assets/confirm.gif": "bdc3e511c73e97fbc5cfb0c2b5f78e00",
"assets/packages/quickalert/assets/error.gif": "c307db003cf53e131f1c704bb16fb9bf",
"assets/packages/quickalert/assets/success.gif": "dcede9f3064fe66b69f7bbe7b6e3849f",
"assets/packages/quickalert/assets/loading.gif": "ac70f280e4a1b90065fe981eafe8ae13",
"assets/packages/quickalert/assets/info.gif": "90d7fface6e2d52554f8614a1f5deb6b",
"assets/packages/quickalert/assets/warning.gif": "f45dfa3b5857b812e0c8227211635cc4",
"assets/packages/fluttertoast/assets/toastify.js": "18cfdd77033aa55d215e8a78c090ba89",
"assets/packages/fluttertoast/assets/toastify.css": "910ddaaf9712a0b0392cf7975a3b7fb5",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "97612497fff01b604bc20a02e0f420aa",
"assets/fonts/MaterialIcons-Regular.otf": "16cf11b97f99926bbb3e39c7b8990a1f",
"assets/assets/images/main_top.png": "018472567d8471808f4c72f8571d6be5",
"assets/assets/images/logo_adminline.png": "7c960b71d6f8ec91afa94c41f9447865",
"assets/assets/images/pictures.jpeg": "5e58831511fc88a299849b1601ee063e",
"assets/assets/images/login_bottom.png": "b473d9b1b30607e274348f114273a094",
"assets/assets/images/logo.png": "b204d51a3f72602ff47136adf301cedf",
"assets/assets/images/icon_conjunto.jpeg": "43c67e91358bbab5aa721173789ab9d1",
"assets/assets/images/areas.jpeg": "9fb15fca74aa794ec63a6f5426baa88c",
"assets/assets/icons/logo_adminline.svg": "a10bd46e78248fc76c2c5c37878c7465",
"assets/assets/icons/logo_viclaus.jpeg": "170a0301979e1175d418bc6e3c4f43e9",
"assets/assets/icons/logo_viclaus_bg.png": "1d60e84701c13c357785b3a7648bd829",
"assets/assets/icons/login.svg": "a7711b1f104c98c8ae18420653074837",
"assets/assets/icons/logo.png": "b368dd09f1aaae0a1e896441ec6885ca",
"assets/assets/icons/logo.jpeg": "669d8167942e6a11e3bdb6e87dd9bc05",
"assets/assets/fonts/InterphasesBold.ttf": "b1e155caf059d8524668de2f5e32c654",
"assets/assets/fonts/BREECBO.ttf": "a5370fa9bbc2170df6847bf2f267b013",
"assets/assets/fonts/SourceSansPro-Regular.ttf": "5182da425f811908bed9f5b8c72fa44f",
"assets/assets/fonts/LTCushion-Bold.ttf": "7e658e4c235df4fd856f17310b9dee19",
"assets/assets/fonts/RugenExpanded.ttf": "5819a4655b3ec42fa6ab5263a55f22c3",
"assets/assets/fonts/Blue.ttf": "6865e83d0c498df79fb4a0ff19cbf004",
"assets/assets/fonts/Digital.ttf": "1e670d88b23c7ab956f1829e3828a210",
"assets/assets/fonts/Pacifico-Regular.ttf": "c1a28478f7a0cc5e25bb395d0543274d",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
