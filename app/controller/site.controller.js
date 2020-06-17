(function(app){
    app.controller('SiteController',function($scope, CategoriaService,FilmesService){
        CategoriaService.listar().then(function(result){
            $scope.filmes = [];
            $scope.categorias = result.data;

            FilmesService.listar().then(function(result2){
                $scope.filmes = result2.data;
            });
        });
    });
    
})(appFilmes);