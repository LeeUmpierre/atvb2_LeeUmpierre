(function(app){
    app.controller('SiteController',function($scope, CategoriaService,FilmeService){
        CategoriaService.listar().then(function(result){
            $scope.filmes = [];
            $scope.categorias = result.data;

            FilmeService.listar().then(function(result2){
                $scope.filmes = result2.data;
            });
        });
    });
    
})(appFilmes);