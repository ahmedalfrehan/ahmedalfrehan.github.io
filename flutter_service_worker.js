'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "b3bc47de7a8375680ba3272baaa5bc12",
".git/config": "f038607b7d655241a327b44d3e72a200",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "167df4e865b9498c67e002c60177ff91",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "8b53a99291c25a613ad69ec5db46b980",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "38eff3060dbe3839858d10b1908463ac",
".git/logs/refs/heads/master": "38eff3060dbe3839858d10b1908463ac",
".git/logs/refs/remotes/origin/master": "253ab110cd92d5b8f516495e322c1792",
".git/objects/03/200cdd252b9d11e6f9600c7000cde1dc899ac1": "6b71614eaf077bd0ad95b607319c5eb1",
".git/objects/06/c71a6de94e6011df99d9f35c9e8097a0add343": "17c85ec7508a3f838552f88d797d8a9e",
".git/objects/08/b7a80f57d817d83cc549497838d2a78dbcf2d4": "870092ce72242d0d1d446a5f325038a3",
".git/objects/0a/52d06cf357f0a3431740d092ce395e1fc7efa0": "9b448d8c0f41da89f3df9f84e4ea3c93",
".git/objects/16/e5d83deaf126fbd0c1fdcd0103258a6634c5f9": "aae17425eefa1758f61c18c5d19eb426",
".git/objects/18/9e9ba58e8a11aafe50614861ba7e0f7567cab4": "dd3812afd2ffcb50ad08d5865d7a7ff5",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/1e/3d92c8d600f14344ff18801e3a88d6855b8b92": "cbf2d72ae77d689a6b40a045c0e20931",
".git/objects/22/2f446ce9c2a39e51318a61d0eb502963c896ad": "8d313ef19b8c9700c03505e34e31a25e",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/32/174ce766c9b6bccc45e34ab065dde598e0e160": "13cce0d8c868a309a1cba68730b5b55e",
".git/objects/33/0e93cf446b9dbe724723e0128e7f0a498cf332": "ebeed9d9af6796e7de4b0ce60bc17be2",
".git/objects/37/70a79c5b9124881c0c2a0dacb4aaa578456989": "8fbc7242663853a39bfb414aa6106819",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/42/a8198116164f780d51662cd9252397d2370e25": "322952c1d3da78f203d51fad9939be0f",
".git/objects/45/51c151c5fa4d568fb2237b3114642caf98e5a7": "c8be1512adb8b9ce33a288f4cc59387f",
".git/objects/4b/ce97af4c874fa038df1a86c0b3c52b95c3f636": "41dbfe0510ba26c897c3fa1348b747cc",
".git/objects/4c/5451cfe0828bb20e95faf25928f835364807db": "949c326c8feddebad79d6ba8bc53b9ba",
".git/objects/4d/5321fe7c21fc144b1bdc0774fc110a987faa64": "ab3bf88a8229b58885928ba1566ed5d1",
".git/objects/54/f4e018ca988ee030fa4357180a1eae4d97f72b": "7a1a968ad534b0757e24fed92ca3fcac",
".git/objects/58/f1e18b912720a42e39cbb03c46fc8587dc40c7": "a708b861f541de4d617e6e266d2f2e7d",
".git/objects/59/7f26c5d2d767289a79c490c2268c8586b2ee96": "780b2d1f3585b739f6a357838679a8d2",
".git/objects/5c/8b3fa4c7a0c76de9ea38cefbdb74bfef8b6e0e": "7026b7400e01f3037a0c2efb48a661b0",
".git/objects/5c/ca24ffd4e90a72161082a1e49433dd0282e12e": "f808d699f884dc80893c66a7d3850a6e",
".git/objects/65/02e73de1feebeb83edc52f9bca924409a5480c": "c12ec96fa5e8689921bd3446cfe6f706",
".git/objects/6a/cd685a1d8ea3620ab818fe9625597f8ad208e4": "bd262e39465e2abe1a5f8ce76f094e83",
".git/objects/6b/d71324e47792285ca97d2b8dd94432211c18ac": "9a8dca9fe9107f5304a373231471baa7",
".git/objects/6c/1e55ffe0bd1c493cadca8948bfbe09f03bf6e6": "08978079b9282eb2dcc4f69da98aaf77",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/7d/b66abcb28393b4a6a230b8af228531657b2bdc": "a472007d604e85da07c709ba359a7ea1",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/ebf5ac9946f0240cfd256a1faeda1928458b70": "d87be79d9e3f7d5901767d32c67dbd1c",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/9a/0d9cb4329f5ea58595a39f8de99732eecfd9f1": "fa9e4efa511fd8b5da4290d5883f8f91",
".git/objects/9a/979ead0ad6bae2c6082110c3ee9805706e8473": "6d3e32d4533150c6a9a2b35128a8e2bf",
".git/objects/9e/3061b373e0328db76054154bd0fcff28033177": "77acab01db1fef751e2282f3708379ec",
".git/objects/9f/e57213418b9e61ee1b2d2221b5d7f273cf1bc1": "d6c33835ec840bba14fa3b4520de9c68",
".git/objects/a0/47cc8b2c095fc12c114537ca68d3b9b19f93ed": "6bd2f300db01514b7a7d4968de1601f7",
".git/objects/a1/011da9238a8cb6d574f42db9e7de2c7f2c76d7": "8580fb80c623192a64147f22175da53f",
".git/objects/a1/31bde766d600d3f261b0b6a28e466e9e70b107": "ce448422f11b86f61def467a5ff7030e",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/af/98b78817a1ce3210c7c8c0bd123ada27238bbf": "34e036de42400861dae8aa974dc15123",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/8816dcfa33964d09af71d8f3e92fbdfbfaecfa": "ad63cf7dd6ed471ea16ffe33c77bcb26",
".git/objects/be/6a34aaafac1938a8e643ebf27d020f5226b7f1": "9545fe1b06d67da23e11854b214cc47d",
".git/objects/bf/2b3f89db2114cde8bff5c303c258793a6eca5f": "c669cfce29ea84daadafa3af82b67a66",
".git/objects/c1/d88e48c92221865886c31e13ac7d5340064b3f": "5a2a7c7c8374c1f4afdaa6ee59dea783",
".git/objects/c2/f76aacac1af3f6b6cae6b7ffb1623b0664196e": "787f97e4f65793d626d30c1a70a53004",
".git/objects/c3/c405ef89d9e95f81e04d137ea034efef0b0293": "a870280b12cb79eaced4337c434f8a80",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/ce/340583117a4e4b23ceb73a701c2b5955025e1e": "debb03cb2932647a456df9a41082a3eb",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/f12bb48b9ad0de36001d036cfb91468c815bad": "7a2de0fcc455df06fa00ecaa27758c3e",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e3/a690819c5bc86f7116afb94aaa5ff31550386a": "07df01fe48ce25560a236e3363d311bb",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/d9088fd7bc69612844338a25229c43caf2a83f": "2269c379407aeddf9296d059899d1e26",
".git/objects/e7/0fff815112385a2f27f1cccd0ddb12f68c169e": "059c4f629ae51a3c29cbaad1480e1ca2",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/b5c8c6a9f818df7a36f62e1b658f71db34a088": "0e77154710158700884db938f0133d70",
".git/objects/ed/cd1eb711360b508cb90e2368de1de72d089d0b": "b78793140c493692f54814b18f444586",
".git/objects/ef/aab43ec00a61999f7ae79d308cb9f0a51e31a6": "9053a89f421e864354b01d9255f3e5ae",
".git/objects/f1/51c02dba1183b4ae63d13ce9eee2cce4b5a274": "c308c8b37938af034bd43a71c7195279",
".git/objects/f2/70e30e620d603ea396fe59d81026d84faf272c": "deb39d35841f339938a52e43cf0ca9ed",
".git/objects/fe/22118c05f9584b108df9111135e6371670f77d": "4b3dce8edbccb0d8e10ea348dde8aa30",
".git/refs/heads/master": "193b44001c63440a02787b8677a4f42a",
".git/refs/remotes/origin/master": "193b44001c63440a02787b8677a4f42a",
"assets/AssetManifest.json": "271e5d39976adc25f2aa22d989069a41",
"assets/assets/fonts/Karla-Bold.ttf": "b45be274b8b65fc9c72b038d72486edd",
"assets/assets/fonts/Karla-BoldItalic.ttf": "17f8a645015756768592e12b12219220",
"assets/assets/fonts/Karla-Italic.ttf": "363d3c4ec8cb40d863cdacfc0049eb12",
"assets/assets/fonts/Karla-Regular.ttf": "fd3f938a23d57da8894c8aa0e85adf3f",
"assets/assets/images/%257B%2520%257D.png": "c37ac5a06e629c87947fe7531e753fae",
"assets/assets/images/ahmad.jpg": "ce1b1c712e88665cb3ea9d494b9c8eaa",
"assets/assets/images/code.png": "783a3429497d5e1c4d94e1eb39726fc8",
"assets/FontManifest.json": "5611cb4da70ed9e85f49c6438482136e",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "40dc0354112cc8777e5a8380a0229191",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "6333b551ea27fd9d8e1271e92def26a9",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "4dc4b14d43308be597c2a677f71538bb",
"/": "4dc4b14d43308be597c2a677f71538bb",
"main.dart.js": "56f3137c7ea89d2b7c81e17711645277",
"manifest.json": "856385af6464faae15be3523aece988d",
"version.json": "d7c4ef1a45c2dffc13a7e17bcf5cd02e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
