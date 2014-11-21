(function () {
    'use strict';
    var controllerId = 'mealplan';
    angular.module('app').controller(controllerId, ['common', 'datacontext', '$scope', 'entityManagerFactory', mealplan]);

    function mealplan(common, datacontext, $scope, emFactory) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);
        var manager = emFactory.newManager();

        $scope.foodDiary = {};

        $scope.saveData = function () {
            saveFoodDiary($scope.foodDiary);
        };
        var vm = this;
        vm.title = 'Meal Plan';
        vm.meals = [];
        activate();

        function activate() {
            common.activateController([getMeals()], controllerId).then(function () {
                log('Activated Meal Plan View');
            });
        }

        function getMeals() {
            return datacontext.getMeals().then(function (data) {
                return vm.meals = data;
            });
        }

        function saveFoodDiary(foodDiary) {
            foodDiary.rating = 1;
            foodDiary.id = undefined;
            var foodDiaries = manager.createEntity('FoodDiary', foodDiary);

            log(foodDiaries);

            manager.saveChanges()
               .then(_saveSucceeded);

            function _saveSucceeded() {
                log('Saved [Food Diary] to remote data source');
            }
        }
    }
})();