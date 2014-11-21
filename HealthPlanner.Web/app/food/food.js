(function () {
    'use strict';
    var controllerId = 'food';
    angular.module('app').controller(controllerId, ['common', 'datacontext', food]);

    function food(common, datacontext) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        var vm = this;

        vm.food = [];
        vm.title = 'Food';

        activate();

        function activate() {
            var promises = [getFood()];
            common.activateController(promises, controllerId)
                .then(function () { log('Activated Food View'); });
        }

        function getFood() {
            return datacontext.getFood().then(function (data) {
                return vm.food = data;
            });
        }
    }
})();