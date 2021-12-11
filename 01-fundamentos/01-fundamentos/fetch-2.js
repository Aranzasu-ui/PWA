// Petición GET
// https://reqres.in/api/users

fetch( 'https://reqres.in/api/users' )
.then( resp => resp.json() )
.then( respObj => {
    console.log( respObj );
    console.log( resp.page );
    console.log ( resp.per_page );
});