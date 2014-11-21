(function () {
    'use strict';
    var controllerId = 'recipebox';
    angular.module('app').controller(controllerId, ['$location', 'common', 'datacontext', recipebox]);

    function recipebox($location, common, datacontext) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        var vm = this;

        vm.recipes = [];
        vm.title = 'Recipe Box';
        vm.gotoRecipe = gotoRecipe;
        activate();

        function gotoRecipe(recipe) {
            if (recipe && recipe.id) {
                $location.path('/recipe/' + recipe.id);
            }
        }

        function activate() {
            var promises = [getRecipes()];
            common.activateController(promises, controllerId)
                .then(function () { log('Activated Recipes View'); });
        }

        function getRecipes() {
            return datacontext.getRecipesPartials().then(function (data) {
                return vm.recipes = data;
            });
        }
    }
})();