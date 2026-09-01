/**
 * Tombstone service worker.
 *
 * This file used to be a cache-first PWA worker, and it was silently breaking
 * the site's measurement. Its `fetch` handler called `respondWith()` for every
 * request the page made — including cross-origin ones — and its error path
 * fell through returning `undefined`. `respondWith(undefined)` is not a valid
 * response, so any third-party script whose fetch rejected came back as an
 * empty 204 rather than failing visibly:
 *
 *   The FetchEvent for ".../gtm.js?id=GTM-5RG38958" resulted in a network
 *   error response: the promise was rejected.
 *   Uncaught (in promise) TypeError: Failed to convert value to 'Response'.
 *
 * That killed Google Tag Manager and Bing UET (`r.UET is not a constructor`
 * is bat.js arriving empty), so conversions were not recorded at all. It was
 * also cache-first on documents, which could serve returning visitors stale
 * HTML, and its precache list named routes that no longer exist, so `install`
 * failed every time anyway.
 *
 * A service worker cannot be removed by deleting the file: browsers that
 * already installed the old one keep running it until they fetch a *newer*
 * script at this URL. So this replaces it and does nothing but uninstall
 * itself. Once it has been served to every returning visitor — browsers
 * re-check this script on navigation, within 24 hours at the outside — this
 * file and the `<link rel="manifest">` it supported can be deleted outright.
 *
 * Do not reintroduce a worker here without scoping `fetch` to same-origin GET
 * requests and never calling `respondWith()` with anything but a Response.
 */

self.addEventListener('install', () => {
  // Replace the old worker immediately rather than waiting for every tab
  // holding it to close.
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      // Drop the caches the old worker created, so no stale HTML survives it.
      const names = await caches.keys();
      await Promise.all(names.map((name) => caches.delete(name)));

      await self.registration.unregister();

      // Reload open tabs so they run uncontrolled from here on. Without this
      // the page keeps the dead worker as its controller until navigation,
      // and its third-party scripts stay broken for the rest of the session.
      const clients = await self.clients.matchAll({ type: 'window' });
      for (const client of clients) {
        client.navigate(client.url);
      }
    })()
  );
});

// No fetch handler. Every request goes straight to the network, which is the
// behaviour this site needs.
