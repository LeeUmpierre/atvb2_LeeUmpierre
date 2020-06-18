appFilmes = angular.module('appFilmes',['ngRoute', 'ngStorage']);

appFilmes.config(function($routeProvider){
    $routeProvider
        .when('/',{
            templateUrl: 'app/template/site.view.html',
            controller: 'SiteCotroller'
        })
        .when('/admin/categorias',{
            templateUrl: 'app/template/admin/categoria.view.html',
            controller: 'CategoriaCotroller'
        })
        .when('/admin/filme',{
            templateUrl: 'app/template/admin/filme.view.html',
            controller: 'FilmeCotroller'
        })
        .otherwise({ redirectTo: '/'})
});