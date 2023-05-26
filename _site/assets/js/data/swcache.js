const resource = [
    /* --- CSS --- */
    '/damarisar.github.io/assets/css/style.css',

    /* --- PWA --- */
    '/damarisar.github.io/app.js',
    '/damarisar.github.io/sw.js',

    /* --- HTML --- */
    '/damarisar.github.io/index.html',
    '/damarisar.github.io/404.html',

    
        '/damarisar.github.io/categories/',
    
        '/damarisar.github.io/tags/',
    
        '/damarisar.github.io/archives/',
    
        '/damarisar.github.io/about/',
    

    /* --- Favicons & compressed JS --- */
    
    
        '/damarisar.github.io/assets/img/favicons/android-chrome-192x192.png',
        '/damarisar.github.io/assets/img/favicons/android-chrome-512x512.png',
        '/damarisar.github.io/assets/img/favicons/apple-touch-icon.png',
        '/damarisar.github.io/assets/img/favicons/favicon-16x16.png',
        '/damarisar.github.io/assets/img/favicons/favicon-32x32.png',
        '/damarisar.github.io/assets/img/favicons/favicon.ico',
        '/damarisar.github.io/assets/img/favicons/mstile-150x150.png'
];

/* The request url with below domain will be cached */
const allowedDomains = [
    

    '0.0.0.0:4000',

    
        'chirpy-img.netlify.app',
    

    'fonts.gstatic.com',
    'fonts.googleapis.com',
    'cdn.jsdelivr.net',
    'polyfill.io'
];

/* Requests that include the following path will be banned */
const denyUrls = [
    
];

