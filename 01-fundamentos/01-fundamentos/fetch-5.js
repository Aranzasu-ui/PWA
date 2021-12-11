fetch('https://reqres.in/api/users/10')
    .then( resp => {

        // resp.clone().json()
        //     .then( usuario => {
        //         console.log(usuario.data)
        //     });

        // resp.json().then( usuario => {
        //     console.log(usuario.data)
        // });

        resp.json().then( console.log );

    })
    .catch( error => {
        console.log('Error en la petición');
        console.log(error);
    });
