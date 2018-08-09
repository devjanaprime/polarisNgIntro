let myApp = angular.module( 'myApp', [] );

myApp.controller( 'MovieController', function( $http ){
    // "this" is the Controller itself, we're holding it in a variable callev "vm"
    let vm = this;
    vm.favoriteMovies = [];

    vm.addInterface = function( show ){
        console.log( 'in addInterface:', show );
        vm.showAdd = show;
    } // end funk

    vm.addMovie = function(){
        console.log( 'in addMovie', vm.movieIn, vm.imageIn );
        // add new movie for favorites array
        let newMovie = {
            title: vm.movieIn,
            imageUrl: vm.imageIn
        } // end newMovie
        // $http call with data via POST
        $http({
            method: 'POST',
            url: '/movies',
            data: newMovie
        }).then( function( response ){
            console.log( 'back from POST with:', response.data );
            vm.getMovies();
        }).catch( function( err ){
            console.log( 'error posting:', err );
        }) // end $http

        // empty inputs
        vm.movieIn = '';
        vm.imageIn = '';
        console.log( 'favorite movies thus far:', vm.favoriteMovies );
    } // end funk

    vm.getMovies = function(){
        console.log( 'in getMovies' );
        $http({
            method: 'GET',
            url: '/movies'
        }).then( function( response ){
            console.log( 'back from server with:', response );
            vm.favoriteMovies = response.data;
        }).catch( function( err ){
            console.log( 'nope' );
        }) //end $http
    } // end getMovies

    // server side, eventually
    vm.movieClick = function( index ){
        console.log( 'click on a movie', index );
        // removing movie at this index
        vm.favoriteMovies.splice( index, 1 );
    } // end funk

    // init
    vm.getMovies();
}); // end controller