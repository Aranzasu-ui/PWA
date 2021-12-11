
self.addEventListener('sync', event => {

        console.log('Tenemos conexión');
        console.log(event);
        console.log(event.tag);

});
