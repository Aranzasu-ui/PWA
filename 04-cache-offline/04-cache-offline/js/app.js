

if ( navigator.serviceWorker ) {
    navigator.serviceWorker.register('/sw.js');
}

/*
if ( window.caches ) {

    caches.open('prueba-1');

    caches.open('prueba-2');

    caches.has('prueba-2').then( console.log );

};
*/