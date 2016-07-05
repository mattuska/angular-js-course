(function(angular, undefined) {
    'use.strict';

    angular
    .module('bemControllers', [])
    .controller('ListagemController', ListagemController)
    .controller('DetalheController', DetalheController)
    .controller('IncluirController', IncluirController)
    .controller('AlterarController', AlterarController);

    ListagemController.$inject = ['$http','$window'];
    function ListagemController($http, $window) {
        var vm = this;
        vm.excluir = excluir;
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

        function excluir(id) {
            if(!$window.confirm('Confirma a exclusão do bem id: ' + id + '?')) {
                return;
            }
            $http.delete('/api/v1/bens/' + id)
                .success(function(response) {
                    $window.alert('Bem excluido com sucesso!');
                    activate();
                })
                .error(function(message) {
                    $window.alert(message);
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
            if(vm.frmbem.$valid) {
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
    }

    AlterarController.$inject = ['$http', '$location', '$routeParams', '$window'];
    function AlterarController($http, $location, $routeParams, $window) {
        var vm = this;
        vm.salvar = salvar;

        activate();

        ////////////////
        function activate() {
            console.log($http);
            $http.get('/api/v1/bens/' + $routeParams.id)
                .success(function(response) {
                    vm.bem = response;
                })
                .error(function(message) {
                    $window.alert(message);
                });
        }

        function salvar() {
            if(vm.frmbem.$valid) {
                $http.put('/api/v1/bens/' + vm.bem._id, vm.bem)
                    .success(function(response) {
                        $window.alert('Bem alterado com sucesso');
                        $location.path('/bens');
                    })
                    .error(function(message) {
                        $window.alert(message);
                    });
            }
        }
    }

})(angular);
