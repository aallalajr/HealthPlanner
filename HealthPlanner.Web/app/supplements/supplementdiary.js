(function () {
    'use strict';
    var controllerId = 'supplementdiary';
    angular.module('app').controller(controllerId, ['common', 'datacontext', supplementdiary]);

    function supplementdiary(common, datacontext) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        var vm = this;

        vm.supplements = [];
        vm.title = 'Supplements Journal';

        activate();

        function activate() {
            var promises = [getSupplements()];
            common.activateController(promises, controllerId)
                .then(function () { log('Activated Supplements View'); });
        }

        function getSupplements() {
            return datacontext.getSupplements().then(function (data) {
                return vm.supplements = data;
            });
        }
    }
})();