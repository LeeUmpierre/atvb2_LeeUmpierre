appFilmes = angular.module('appFilmes',['ngRoute', 'ngStorage']);

appFilmes.config(function($routeProvider){
    $routeProvider
        .when('/',{
            templateUrl: 'app/template/site.view.html',
            controller: 'SiteController'
        })
        .when('/admin/categorias',{
            templateUrl: 'app/template/admin/categoria.view.html',
            controller: 'CategoriaController'
        })
        .when('/admin/filme',{
            templateUrl: 'app/template/admin/filme.view.html',
            controller: 'FilmeController'
        })
        .otherwise({ redirectTo: '/'})
});