
(function (app) {
    'use strict';

    app.service('FilmesService', function ($q, $localStorage) {
        const deferred = $q.defer();

        function loadJSON() {
            deferred.resolve({ data: $localStorage.filmes || [] });

            return deferred.promise;
        }

        function save(filme) {
            var dados = $localStorage.categorias || [];

            if (!filme.id) {
                //Pega o ultimo registro
                var ultimo = dados[dados.length - 1];

                //Incrementa o valor de ID o ultimo registro
                filme.id = ultimo ? ultimo.id + 1 : 1;

                //Adiciona o filme no vetor
                dados.push(filme);

                //Devolve o vetor para o localstorage
                $localStorage.categorias = dados;
            }

            deferred.resolve(filme);

            return deferred.promise;
        }

        function remove( filme ) {
            var dados = $localStorage.categorias;

            //Procura o index do filme que está vindo por parametro
            var index = dados.indexOf( filme );

            //Remove a partir do indice uma qtdade de elementos, no caso 1
            dados.splice(index, 1)

            //Atualioza local storage
            $localStorage.categorias = dados;

            deferred.resolve({data: dados});
            return deferred.promise;
        }

        return {
            listar: loadJSON,
            salvar: save,
            remover: remove
        }

    });

})(appFilmes);