(function () {
    'use strict';
    var controllerId = 'medicationdiary';
    angular.module('app').controller(controllerId, ['common', 'datacontext', medicationdiary]);

    function medicationdiary(common, datacontext) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        var vm = this;

        vm.medications = [];
        vm.title = 'Medication Journal';

        activate();

        function activate() {
            var promises = [getMedications()];
            common.activateController(promises, controllerId)
                .then(function () { log('Activated Medication View'); });
        }

        function getMedications() {
            return datacontext.getMedications().then(function (data) {
                return vm.medications = data;
            });
        }
    }
})();