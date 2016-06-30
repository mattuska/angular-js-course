(function(angular, undefined) {
    'use.strict';

    angular
    .module('bemControllers', [])
    .controller('ListagemController', ListagemController);

    ListagemController.$inject = ['$http'];
    function ListagemController($http) {
        var vm = this;
        activate();

        ////////////////
        function activate() {
            var promise = $http.get('/api/v1/bens');
            promise.then(function(response) {
                vm.bens = response.data;
            })
            .catch(function(erro) {
                $window.alert(erro);
            });
        }



            vm.bens = [
                {
                    descricao: 'Prédio do Banco Central do Brasil - BACEN',
                    urlFoto: 'http://bit.ly/imgbacen',
                    titulo: 'Banco Central'
                },
                {
                    descricao: 'Palácio do Buriti, sede do GDF',
                    urlFoto: 'http://bit.ly/imgburiti',
                    titulo: 'Palacio do Buriti'
                },
                {
                    descricao: 'Câmara dos deputados do DF',
                    urlFoto: 'http://bit.ly/imgcamara',
                    titulo: 'Câmara Legistativa'
                }
            ];
        }
    }
})(angular);
