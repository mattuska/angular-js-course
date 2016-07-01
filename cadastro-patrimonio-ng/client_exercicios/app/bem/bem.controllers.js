(function(angular, undefined) {
    'use.strict';

    angular
    .module('bemControllers', [])
    .controller('ListagemController', ListagemController)
    .controller('DetalheController', DetalheController)
    .controller('IncluirController', IncluirController);

    ListagemController.$inject = ['$http','$window'];
    function ListagemController($http, $window) {
        var vm = this;
        activate();

        ////////////////
        function activate() {
            $http.get('/api/v1/bens')
            .success(function(response) {
                vm.bens = response;
            })
            .error(function(erro) {
                $window.alert(erro);
            });
        }
    }

    DetalheController.$inject = ['$http','$routeParams', '$window'];
    function DetalheController($http, $routeParams, $window) {
        var vm = this;
        activate();

        ////////////////
        function activate() {
            $http.get('/api/v1/bens/' + $routeParams.id)
            .success(function(response) {
                vm.bem = response;
            })
            .error(function(erro) {
                $window.alert(erro);
            });
        }
    }

    IncluirController.$inject = ['$http', '$location', '$window'];
    function IncluirController($http, $location, $window) {
        var vm = this;
        vm.bem = {};
        vm.salvar = salvar;

        ////////////////
        function salvar() {
            $http.post('/api/v1/bens', vm.bem)
            .success(function(response) {
                $window.alert('Bem incluido com sucesso');
                $location.path('/bens');
            })
            .error(function(message) {
                $window.alert(message);
            });
        }
    }

})(angular);
