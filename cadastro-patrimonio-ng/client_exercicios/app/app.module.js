angular.module('cadpat', [])

    .controller('listagemController', ['$scope', function($scope) {

        $scope.foto = {
            url: 'http://bit.ly/imgbacen',
            alt: 'Banco Central'
        };
    }]);
