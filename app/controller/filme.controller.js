(function (app) {
    'use strict';

    app.controller('FilmeController', function ($scope, FilmeService, CategoriaService) {

        //Controle para OrderBy e Filter
        $scope.decrescente = false;
        $scope.selectedColumn = 'id';

        //Controle de exibição da tabela/formulario
        $scope.showTable = true;

        //Seta a coluna para ser filtrada/ordenada
        $scope.setColumn = function (columnName) {
            $scope.selectedColumn = columnName;

            //determina o ordenação decrescente (false)
            $scope.decrescente = !$scope.decrescente;
        }

        //Retornar para o FILTER qual a coluna será utilizada na ordenação/filtro
        $scope.filter = function () {
            var filtro = {};

            filtro[$scope.selectedColumn] = $scope.textFilter;

            return filtro;
        }

        //Prepara a tela para um novo cadastro
        $scope.novo = function () {
            //Representar o filme atual
            $scope.filme = {
                nome: '',
                foto: '',
                sinopse: '',
                preco: '',
            }

            $scope.showTable = false;
        }

        //Cancelar a inclusao/edicao
        $scope.cancelar = function () {
            $scope.showTable = true;
        }

        //Salvar a inclusão/edição do filme
        $scope.salvar = function () {
            FilmeService.salvar($scope.filme).then(function (result) {
                $scope.showTable = true;
            });

        }

        //Editar o filme selecionado
        $scope.editar = function (filme) {
            $scope.filme = filme;
            $scope.showTable = false;
        }

        //Excluir o filme selecionado
        $scope.excluir = function () {
            FilmeService.remover($scope.filme).then(function (result) {
                $scope.showTable = true;
            });
        }

        //Carrega uma lista de filmes
        FilmeService.listar().then(function (result) {
            $scope.categorias = [];
            $scope.filmes = result.data;


            CategoriaService.listar().then(function (result2) {
                $scope.categorias = result2.data;
            });
        });
    });
})(appFilmes);