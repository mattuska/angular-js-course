var cadpat;
(function (cadpat) {
    var bem;
    (function (bem_1) {
        'use strict';
        var ListagemController = (function () {
            function ListagemController($scope, BemResource, $window, alertaService) {
                this.$scope = $scope;
                this.BemResource = BemResource;
                this.$window = $window;
                this.alertaService = alertaService;
                this.nomePessoa = 'Matheus';
                $scope.$on('showModal', function (event, time) {
                    console.log('Evento recebido: ' + time);
                });
                this.listar();
            }
            ////////////////
            ListagemController.prototype.listar = function () {
                var _this = this;
                this.BemResource.query(function (bens) {
                    _this.bens = bens;
                }, function (error) {
                    _this.alertaService.add('danger', error);
                });
            };
            ListagemController.prototype.excluir = function (id) {
                var _this = this;
                if (!this.$window.confirm("Confirma a exclus\u00E3o do bem id: " + id + "?")) {
                    return;
                }
                this.BemResource.delete({
                    id: id
                }, function () {
                    _this.alertaService.add('success', 'Bem excluído com sucesso');
                    _this.listar();
                }, function (error) {
                    _this.alertaService.add('danger', error);
                });
            };
            ListagemController.$inject = ['$scope', 'BemResource', '$window', 'alertaService'];
            return ListagemController;
        }());
        bem_1.ListagemController = ListagemController;
        var DetalheController = (function () {
            ////////////////
            function DetalheController(BemResource, $routeParams, $window) {
                var _this = this;
                this.BemResource = BemResource;
                this.$routeParams = $routeParams;
                this.$window = $window;
                BemResource.get({
                    id: $routeParams.id,
                }, function (bem) {
                    _this.bem = bem;
                }, function (error) {
                    _this.$window.alert(error);
                });
            }
            DetalheController.$inject = ['BemResource', '$routeParams', '$window'];
            return DetalheController;
        }());
        var IncluirController = (function () {
            function IncluirController(BemResource, $location, $window) {
                this.BemResource = BemResource;
                this.$location = $location;
                this.$window = $window;
            }
            ////////////////
            IncluirController.prototype.salvar = function () {
                var _this = this;
                this.BemResource.save(this.bem, function () {
                    _this.$window.alert('Bem incluído com sucesso');
                    _this.$location.path('/bens');
                }, function (error) {
                    _this.$window.alert(error);
                });
            };
            IncluirController.$inject = ['BemResource', '$location', '$window'];
            return IncluirController;
        }());
        var AlterarController = (function () {
            function AlterarController(BemResource, $location, $routeParams, $window) {
                var _this = this;
                this.BemResource = BemResource;
                this.$location = $location;
                this.$routeParams = $routeParams;
                this.$window = $window;
                this.BemResource.get({
                    id: this.$routeParams.id,
                }, function (bem) {
                    _this.bem = bem;
                }, function (error) {
                    _this.$window.alert(error);
                });
            }
            ////////////////
            AlterarController.prototype.salvar = function () {
                var _this = this;
                this.BemResource.update({
                    id: this.$routeParams.id,
                }, this.bem, function () {
                    _this.$window.alert('Bem alterado com sucesso');
                    _this.$location.path('/bens');
                }, function (error) {
                    _this.$window.alert(error);
                });
            };
            AlterarController.$inject = ['BemResource', '$location', '$routeParams', '$window'];
            return AlterarController;
        }());
        angular
            .module('bemControllers', [])
            .controller('ListagemController', ListagemController)
            .controller('DetalheController', DetalheController)
            .controller('IncluirController', IncluirController)
            .controller('AlterarController', AlterarController);
    })(bem = cadpat.bem || (cadpat.bem = {}));
})(cadpat || (cadpat = {}));
