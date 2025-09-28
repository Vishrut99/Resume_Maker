// Minimal browser polyfills
// Provide a `global` alias for browser if some libs expect it
if (typeof window !== 'undefined' && typeof global === 'undefined') {
  // eslint-disable-next-line no-undef
  window.global = window;
}

// Ensure Headers/Request/Response exist (most modern browsers have them)
// Only define if missing to avoid clobbering
(function ensureFetchBuiltins(){
  try {
    // Access to trigger ReferenceError if not present
    void Headers; void Request; void Response;
  } catch (e) {
    // If missing, rely on fetch polyfill if needed (not adding heavy polyfill here)
    // You can add 'whatwg-fetch' if your target browsers require it.
  }
})();
