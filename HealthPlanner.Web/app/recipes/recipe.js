(function () {
    'use strict';

    var controllerId = 'recipe';

    angular.module('app').controller(controllerId, ['$routeParams', 'common', 'datacontext', '$scope', 'entityManagerFactory', recipe]);

    function recipe($routeParams, common, datacontext, $scope, emFactory) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);
        var manager = emFactory.newManager();

        var vm = this;
        var logError = common.logger.getLogFn(controllerId, 'error');

        vm.activate = activate;
        vm.getTitle = getTitle;
        vm.recipe = undefined;
        vm.ingredients = undefined;
        vm.recipeIdParameter = $routeParams.id;
        vm.title = 'Recipe';
        activate();
        
        $scope.saveData = function () {
            saveRecipe(vm.recipe);
        };
        
        function activate() {
            common.activateController([getRecipe()], controllerId).then(function () {
                log('Activated Recipe View');
            });

            common.activateController([getIngredients()], controllerId).then(function () {
                log('Activated Ingredients View');
            });
        }

        function getRecipe() {
            var val = $routeParams.id;

            return datacontext.getRecipe(val).then(function (data) {
                vm.recipe = data;
            }, function(error) {
                logError('Unable to get recipe ' + val);
            });
        }

        function getIngredients() {
            var val = $routeParams.id;
            return datacontext.getIngredients(val).then(function (data) {
                return vm.ingredients = data;
            });
        }

        function saveRecipe(recipe) {
            log(recipe);
            recipe.rating = 1;
            recipe.url = 'asdf';
            recipe.imageSource = 'sdf';
            recipe.id = undefined;
            var recipes = manager.createEntity('Recipe', vm.recipe);

            log(recipe);

            manager.saveChanges()
                .then(_saveSucceeded);

            function _saveSucceeded() {
                log('Saved [Recipe] to remote data source');
            }
        }

        function getTitle() {
            return 'Edit ' + ((vm.recipe && vm.recipe.name) || '');
        }
    }
})();