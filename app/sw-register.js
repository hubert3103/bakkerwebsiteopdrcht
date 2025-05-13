export function register() {
  if ('serviceWorker' in navigator && typeof window !== 'undefined') {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('/sw.js')
        .then((registration) => {
          console.log('ServiceWorker registration successful')
        })
        .catch((err) => {
          console.log('ServiceWorker registration failed: ', err)
        })
    })
  }
} 