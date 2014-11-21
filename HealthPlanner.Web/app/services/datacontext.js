(function () {
    'use strict';

    var serviceId = 'datacontext';
    angular.module('app').factory(serviceId, ['common', 'entityManagerFactory', 'config', datacontext]);

     
    function datacontext(common, emFactory, config) {
        var EntityQuery = breeze.EntityQuery;
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(serviceId);
        var logError = getLogFn(serviceId, 'error');
        var logSuccess = getLogFn(serviceId, 'success');
        var manager = emFactory.newManager();
        var $q = common.$q;

        var service = {
            getGroceries: getGroceries,
            getMeals: getMeals,
            getExercise: getExercise,
            getRecipesPartials: getRecipesPartials,
            getRecipe: getRecipe,
            getIngredients: getIngredients,
            getSupplements: getSupplements,
            getMedications: getMedications,
            getReports: getReports,
            save: save,
            getFood: getFood,
        };

        return service;

        function save() {
            manager.saveChanges()     // returns a promise
               .then(_saveSucceeded);//, _saveFailed);   // if save throws an exception

            function _saveSucceeded() {
                log('Saved to remote data source');
            }
        }

        function getReports() {
            var reports = [
                { name: 'Report 1' },
                { name: 'Report 2' },
                { name: 'Report 3' },
            ];
            return $q.when(reports);
        }

        function getMedications() {
            var medications = [
                { name: 'Gemfibrozil', rank: 1 },
                { name: 'Pravastatin', rank: 3 },
                { name: 'Metformin', rank: 2 },
            ];
            return $q.when(medications);
        }

        function getSupplements() {
            var supplements = [
                { name: 'Salmon Oil', rank: 1 },
                { name: 'Cod Liver Oil', rank: 3 },
                { name: 'Vitamin E', rank: 2 },
            ];
            return $q.when(supplements);
        }

        function getGroceries() {
            var groceries = [
                { name: 'Lettuce', quantity: 3 },
                { name: 'Water', quantity: 2 },
                { name: 'Turkey', quantity: 1 },
            ];
            return $q.when(groceries);
        }

        function getMeals() {

            var orderBy = 'id';
            var meals;

            return EntityQuery.from('Meals')
                .select('id, name, foodId, servings, rating')
                .orderBy(orderBy)
                .toType('FoodDiary')
                .using(manager).execute()
                .then(querySucceeded, _queryFailed);

            var promise = entityManager
               .executeQuery(query)
               .then(successCallback)
               .catch(failCallback)
               .finally(wrapUp);

            function querySucceeded(data) {
                meals = data.results;
                log('Retrieved [Meals] from remote data source', meals.length, true);
                return meals;
            }
        }

        function getExercise() {
            var orderBy = 'name';
            var exercise;

            return EntityQuery.from('GetExerciseDiary')
                .orderBy(orderBy)
                .using(manager).execute()
                .then(querySucceeded, _queryFailed);

            var promise = entityManager
               .executeQuery(query)
               .then(successCallback)
               .catch(failCallback)
               .finally(wrapUp);

            function querySucceeded(data) {
                exercise = data.results;
                log('Retrieved [Exercise] from remote data source', exercise.length, true);
                return exercise;
            }
        }

        function getRecipe(id) {
            var recipes;

            return EntityQuery.from('GetRecipe')
                .withParameters({ id: id })
                .toType('Recipe')
                .using(manager).execute()
                .then(querySucceeded, _queryFailed);

            var promise = entityManager
               .executeQuery(query)
               .then(successCallback)
               .catch(failCallback)
               .finally(wrapUp);

            function querySucceeded(data) {
                recipes = data.results;
                log('Retrieved [Recipe] from remote data source', recipes.length, true);
                return recipes;
            }
        }

        function getIngredients(id) {
            var orderBy = 'id';
            var ingredients;

            return EntityQuery.from('GetIngredients')
                .withParameters({ id: id })
                .orderBy(orderBy)
                .toType('Food')
                .using(manager).execute()
                .then(querySucceeded, _queryFailed);

            var promise = entityManager
               .executeQuery(query)
               .then(successCallback)
               .catch(failCallback)
               .finally(wrapUp);

            function querySucceeded(data) {
                ingredients = data.results;
                log('Retrieved [Ingredients] from remote data source', ingredients.length, true);
                return ingredients;
            }
        }

        function getRecipesPartials() {
            var orderBy = 'id';
            var recipes;

            return EntityQuery.from('Recipes')
                .orderBy(orderBy)
                .toType('Recipe')
                .using(manager).execute()
                .then(querySucceeded, _queryFailed);

            var promise = entityManager
               .executeQuery(query)
               .then(successCallback)
               .catch(failCallback)
               .finally(wrapUp);

            function querySucceeded(data) {
                recipes = data.results;
                log('Retrieved [Recipe Partials] from remote data source', recipes.length, true);
                return recipes;
            }
        }

        function getFood() {
            var orderBy = 'id';
            var food;

            return EntityQuery.from('GetFood')
                .select('name, rating, calories, carbs, fat, protein, sodium, sugar, transFat')
                .orderBy(orderBy)
                //.toType('Food')
                .using(manager).execute()
                .then(querySucceeded, _queryFailed);

            var promise = entityManager
               .executeQuery(query)
               .then(successCallback)
               .catch(failCallback)
               .finally(wrapUp);

            function querySucceeded(data) {
                food = data.results;
                log('Retrieved [Food] from remote data source', food.length, true);
                return food;
            }
        }

        function _queryFailed(error) {
            var msg = config.appErrorPrefix + 'Error retrieving data.' + error.message;
            logError(msg, error);
            throw error;
        }

        function _saveFailed(error) {
            var msg = config.appErrorPrefix + 'Error saving data.' + error.message;
            logError(msg, error);
            throw error;
        }
    }
})();