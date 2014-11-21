(function () {
    'use strict';

    var controllerId = 'foodjournal';

    // TODO: replace app with your module name
    angular.module('app').controller(controllerId, ['common', 'datacontext', foodjournal]);

    function foodjournal(common, datacontext) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        var vm = this;
        vm.title = 'Food Journal';
        vm.meals = [];
        activate();

        function activate() {
            common.activateController([getMeals()], controllerId).then(function () {
                log('Activated Food Journal View');
            });
        }

        function getMeals() {
            return datacontext.getMeals().then(function (data) {
                return vm.meals = data;
            });
        }
    }
})();