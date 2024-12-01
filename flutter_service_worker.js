'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "caa08f0b49bba4f5c56ab7a0b0221052",
"version.json": "24397dac332b114eb19489f9a2690241",
"index.html": "0d1bdf71c2bb72355d2988fb68d4dda5",
"/": "0d1bdf71c2bb72355d2988fb68d4dda5",
"main.dart.js": "404ba7c99e16623df1831cf815418a7c",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "2560326c8128a88754ffd22f2d004cdc",
"bootpay_api.js": "487d7c5584a1f646dbb41bb90c7252d1",
".git/config": "375464ff28656d344e21f2fbc0ea56d1",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/35/9cab337ae1b0fad3ab5cc4f55fe3348e9f0480": "053c16f3b6dc17b2bfba9767d13792ea",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/0e/cc5fdb75d0713f196f2c37c3bfc4a467a4e47f": "531836616fd222c8492946fe8ca9771f",
".git/objects/60/af3187d7d8c496028ff19dd46cc08f155e5b5e": "c4614b6311e919d8eb4eeda113b97443",
".git/objects/34/9f7cd6356685db778c905718c1a26219efb08a": "dad2694f601377e0db3a9f912a32989a",
".git/objects/33/35f63bd1b9b4f2fcac2494b838d6373fa2e6a5": "a98e0678b68b102335804265fbc63647",
".git/objects/d9/f2487135f41800a006bded6195d1b108334761": "787f834244ea359325a957ebcc4168c9",
".git/objects/bb/9d311c1c6efa994d9eb05ead8da123219d0716": "ee28d58af602b048e1eaf2d71cded935",
".git/objects/d0/0a980f64def018652f580431275109d8ddf410": "4ed2f7256c1eeca841af4bab15a2f1dc",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/df/91cc1f4af613cc69c09a3c2ebd016d39c024c1": "3970be2dc650841be9616f0c261bcca1",
".git/objects/b4/a3ecb9428e2a4b8aff40c099e1c27d64a928f0": "6e4bc29289eb6be950713f1b329eaf0d",
".git/objects/a2/b51a36cc936eaf10eb9a623ef259b81e0a90c1": "85f9349f59b93a81c1ea4efc65aedb27",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/622474f9467a2361bd635d3715736b03905bc7": "1780d82c383ef506d78eeb6a874d2dfa",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/ee/3b5a02b94ef75e43ce20bd5fb5c2cf4399e4c6": "f7d39aebddb4a3255b4aaf2242b7c72b",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/20/35fbeb2e616f0e1193f593ebc50ccdaabd8806": "b3946930a4613fee29ed86843bee0f44",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/4b/a7b33c526348d55b383e35d53cb2b0c83fbac6": "8285aada31c70499163cb0857b7d792a",
".git/objects/11/40f5eb7314f698369099d11b56fbc255e2ad60": "60551ec73846f485f3e616106a55c198",
".git/objects/29/23d315faf8916bc6f59fbbf5d527ee8b6664b8": "98e34eb4a0a9ef398c2bdee80928d77c",
".git/objects/1f/3487f2096e93b7480d84d76c51fb69a83c48eb": "8f640bfe175af30adf58e90ce2e5ee95",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/1753f106ef396a8822a782c5d5f8bc4100514d": "c382fd188a2e35e8aeaddd9774b0434c",
".git/objects/26/fe9db8b9f1bd2119ade4373fb2173f7f8d3a71": "8690bd68671326e224ca6b77b5fae7d8",
".git/objects/75/01e0b0bf25fb8cfa781b786e73366ce04ac8b2": "3911664a275bd3fd687a47abfef2230b",
".git/objects/86/bf0e7bcf0abfb9cb4bc9b7f400496cabba8f6e": "957bf85178e0f959ac3ec6dcbf8b6105",
".git/objects/43/d438c80f98aa89b24472dd7444cf2300fbf024": "89781069db09632faa6d6f4efc714b90",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/07/cbb982d08302521eaed9788f38990daee5a877": "15513f3f60e31f80ee96004c7661371d",
".git/objects/09/4bb6ae24f0cd847d40cb4cc4a2434f2ec9b83b": "b9e6d850322c11db635bcf0a45b762ff",
".git/objects/96/754f91425e71a5da02cd8fc327b753953d3186": "dd7930ae518e1c708d4b46e4de85c3da",
".git/objects/98/c5d98846625597cfed2d67afaed6a96e38a349": "8dee0b2bbbf1b1643162c80a1d729054",
".git/objects/98/d438f96cf260d85fb11804d0b8b80761894c4a": "f20a5c67b44e6f87df3000e3a01b246c",
".git/objects/37/f89e1964990894bf88aefa4bb52464168876f4": "fd2c9edfa80bd272716c1af97b6fcc62",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/39/1f71a49cfad3ba5cd19a896ead512fd08d8c04": "b2bcb3225acab7b5e571e8a2eaabaea4",
".git/objects/97/198a323f08dd6d2c0427160e3c10079b7146b7": "605dc1dda0c8927c2c587c1d371e90e0",
".git/objects/0f/4a65c665058695d145e86061b5046964213579": "8ad3b62d6bd4ff6091f486cdd856546c",
".git/objects/0a/0bf45627054d24a066daf0547af232d00e17b1": "e757402a85fe1372a81b90527fa5605b",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/a7/f11398cd9dc55a84e1e128492f01695d437ea5": "24107895f3318eb61f0d0660788d20d4",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ef/647c0a4356131682bfca50ad0dc93514d4d9be": "a340f05618257e3eddcccb867c06c5d8",
".git/objects/ef/45677bd7ffeff3573ffa6874c735d86e162704": "2df2b95ddbb8a313abf2898aaa651cb1",
".git/objects/fa/d4f942c7f96c636989bad0ee756ebc7970cffa": "50b9ca429d18691b9870ecfb85d1674b",
".git/objects/cb/75e958b3b4436c828af6f2cd212270612f287b": "930d7b21567a23acfed9a6b9c54330b5",
".git/objects/f8/2120f396347590331ec1d219bf9f8171211e3b": "2b0d35b21983e7a3eaa7747f021e990f",
".git/objects/ce/aa6381478b4158f1c917c4df6ffe374355ab74": "ce2479f67df51bc62dd58676d658780b",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/70/78a43302799948e131ce198bffa0cb42f4c961": "a5e7af84fcb2ce2ace330dacc3c512a8",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/2b/eb4680bc2d385fe3d35bcf9c49295655912e76": "6a10db048781f0cfa7c34efe2edfaf22",
".git/objects/7a/58864f0c62600e1c19fa6db0fafcead47d7a7d": "ddc255104f6135fc78468933af5dc3b8",
".git/objects/8e/f22008dbbd3265b07d369f5d8cfd1c550e108a": "0f904532bcf40adb674be02c08f4e881",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "cd399b15e459221bb7bb212026ced78f",
".git/logs/refs/heads/main": "cd399b15e459221bb7bb212026ced78f",
".git/logs/refs/remotes/origin/main": "41f4110a8b60180adb341f78d5c1809a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "0f4bc9209d91de938baa30074257336e",
".git/refs/remotes/origin/main": "0f4bc9209d91de938baa30074257336e",
".git/index": "0a806e102310f517d7f8d6465a7b15b0",
".git/COMMIT_EDITMSG": "d48b766fe2800793775bd2d7800fc56f",
".git/FETCH_HEAD": "afd700cce800eb7e476eefb260d36c06",
"assets/AssetManifest.json": "222bc785bdb07236eb8746bafcb02592",
"assets/NOTICES": "737a81dba4b56b819d3469f229be53fb",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "c4f8840eb0b8bc4a7439a8f7fff5c17f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "6e9f863d0492f0f28bab13c40e44f427",
"assets/fonts/MaterialIcons-Regular.otf": "1c32e939b0f66924fdfb1a14cdd39d02",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
