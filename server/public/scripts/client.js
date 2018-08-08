let myApp = angular.module( 'myApp', [] );

myApp.controller( 'MovieController', function(){
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
        vm.favoriteMovies.push( newMovie );
        // empty inputs
        vm.movieIn = '';
        vm.imageIn = '';
        console.log( 'favorite movies thus far:', vm.favoriteMovies );
    } // end funk


    vm.movieClick = function( index ){
        console.log( 'click on a movie', index );
        // removing movie at this index
        vm.favoriteMovies.splice( index, 1 );
    } // end funk
}); // end controller