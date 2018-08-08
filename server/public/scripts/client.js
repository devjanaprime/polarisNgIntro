let myApp = angular.module( 'myApp', [] );

myApp.controller( 'MovieController', function(){
    // "this" is the Controller itself, we're holding it in a variable callev "vm"
    let vm = this;
    vm.favoriteMovies = [];

    vm.addMovie = function(){
        console.log( 'in addMovie', vm.movieIn );
        vm.favoriteMovies.push( vm.movieIn );
        console.log( 'favorite movies thus far:', vm.favoriteMovies );
    } // end funk
}); // end controller