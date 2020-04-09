(function () {
    angular
        .module('estoque', ['ui.router'])
        .config(config);

    function config($stateProvider, $urlRouterProvider) {
        // default route
        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state('estoque', {
                url: '/estoque',
                templateUrl: 'index.html',
                controller: 'Produto.Controller',
                controllerAs: 'vm'
            });
    }
})();