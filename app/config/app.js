var app = angular.module("MyApp", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl : 'app/views/accueil.html',
        controller : 'accueilController'
    })
    .when('/auteurs', {
        templateUrl : 'app/views/auteurs.html',
        controller : 'auteursController'
    })
    .when('/auteur/:id_auteur', {
        templateUrl : 'app/views/auteur.html',
        controller : 'auteurController'
    })
    .when('/formulaire/:id_auteur',{
      templateUrl : 'app/views/formulaire.html',
    controller : 'formController' 
    })
    .when('/404',{
        templateUrl : 'app/views/404.html',

    }).otherwise({
        redirectTo : '/404'
    })


})