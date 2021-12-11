
self.addEventListener('fetch', event => {

    const offlineResp = new Response(`
                <DOCTYPE html>
                <head>
                <meta charset="utf-8">
                <title>MI PWA</title>
                </head>
                <body class="container p-3">
                <h1>Modo offline</h1>
                </body>
                </thml>

    
    `,{
        headers: {
            'Content-Type':'text/html'
        }
    });

    const resp = fetch(event.request)//elemento request 
                .catch( () => offlineResp );

    event.respondWith( resp );
});