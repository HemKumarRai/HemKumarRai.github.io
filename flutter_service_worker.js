'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "548fb738933f132a970fe58d8af868c5",
"assets/assets/fonts/ArchivoNarrow-Regular.ttf": "dbcd1ecf1a4b0d74289a54ed72edc1c3",
"assets/assets/fonts/AvenirLTStd-Book.ttf": "ecb0c2ae369ba2a89d9a1ec2a1b3187b",
"assets/assets/fonts/AvenirLTStd-Medium.ttf": "4f995fa49446998983e05df9994dc96c",
"assets/assets/fonts/AvenirLTStd-Roman.ttf": "b1d7c6e085a31e9f5e4745c9aef6eb4b",
"assets/assets/fonts/Charmonman-Regular.ttf": "14118f53e8cf56a7c44ae47b29e9ea05",
"assets/assets/fonts/Gluten-Thin.ttf": "0a9cf9b916057b3a5e82da48a9c5a767",
"assets/assets/fonts/Tangerine-Regular.ttf": "c848a4eb65096cac74c9fc3df274ca4d",
"assets/assets/images/ab.png": "7fbd1dd1ce11fab611312eef67e7b99d",
"assets/assets/images/abc.png": "201ddadd28383640438ea35ac0ffdc4b",
"assets/assets/images/background.jpg": "f1a0d1c2c4da8522b300e1aed4806ee2",
"assets/assets/images/bg.png": "67c8c1b359d39968ae12d618aab913ed",
"assets/assets/images/birds.json": "d4c1256983bacd73e10d1b9e2719b0c3",
"assets/assets/images/boy.json": "bd290b10b64427232f5acaa30b5c3cc0",
"assets/assets/images/dp.JPG": "9d4c2c326c5b764b5041e3b91165082c",
"assets/assets/images/dpp.jpg": "e174bd92f3899e912bb3fc1ae7510796",
"assets/assets/images/DSC06832.JPG": "810a2909271b57a72f506f0d7ae70272",
"assets/assets/images/ha1.JPG": "06b5c4c01f42f7791f6df26bb2920e7e",
"assets/assets/images/ha2.JPG": "32fc12f4817f94479ff340219ab2b63d",
"assets/assets/images/ha3.JPG": "e590f11aba5a9c504095ddd23e72e795",
"assets/assets/images/ha4.JPG": "e577b2b3f04ae0258daa447cddd8610b",
"assets/assets/images/ha5.JPG": "1313d5e29f9fe23f5c818065064983b7",
"assets/assets/images/IMG_6833.JPG": "82dfd5077df46c6d3acd8fc71bfe431b",
"assets/assets/images/j81.JPG": "84fdb6b4934d5f4410f0df9ea82936e1",
"assets/assets/images/j82.JPG": "1a67b08c2d55191916541f617e30375b",
"assets/assets/images/j83.JPG": "0a27a4d7ad48d34d4f608ba9450ea18c",
"assets/assets/images/j84.JPG": "a0e458960572f7c80737a91388947e64",
"assets/assets/images/j85.JPG": "5d66ee53f40d645cb006b1c324e0d7c5",
"assets/assets/images/loading.flr": "26ceb2ac2c2a348e90e5f1b21723cfa3",
"assets/assets/images/loc.JPG": "345e26f16974b3d11a017bcb1dcbce97",
"assets/assets/images/lottie.json": "09a535ddc2be6652f0cf9fac85b3c01f",
"assets/assets/images/pp.JPG": "80dcd8e5572e058c8ae649fa21ab3c77",
"assets/assets/images/sr1.jpg": "685b19015277a0e99bcb86e7be362764",
"assets/assets/images/sr2.jpg": "1ccb04803c496f521a66f542fb4cbf00",
"assets/assets/images/sr3.jpg": "cb9e4824ac0989d7d87e14b2214caaac",
"assets/assets/images/sr4.jpg": "0620b6186b1a256650281be35fe424e4",
"assets/assets/images/sr5.jpg": "40a289e4049d2496dcc5ad87a941f82b",
"assets/assets/images/welcome.json": "9bae775da6ac4624df579cce2d11bffa",
"assets/FontManifest.json": "c64b6b0ef9493e382784481207693bac",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "b2261cdee11bc10a0746953729632c0f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "3241d1d9c15448a4da96df05f3292ffe",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "eaed33dc9678381a55cb5c13edaf241d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "ffed6899ceb84c60a1efa51c809a57e4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "eb268f8ff76bab672bedf8dacfc13dcd",
"/": "eb268f8ff76bab672bedf8dacfc13dcd",
"main.dart.js": "7749bd3057b665d57c1fb84cf36d5ee2",
"manifest.json": "5a2c0526f1fe73e6f211bc7a9d15c210",
"version.json": "426313f2f3133c2f20415344c4a22df3"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
