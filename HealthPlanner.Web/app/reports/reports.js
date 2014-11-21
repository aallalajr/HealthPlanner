(function () {
    'use strict';
    var controllerId = 'reports';
    angular.module('app').controller(controllerId, ['common', 'datacontext', reports]);

    function reports(common, datacontext) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        var vm = this;

        vm.reports = [];
        vm.title = 'Reports';

        activate();

        function activate() {
            var promises = [getReports()];
            common.activateController(promises, controllerId)
                .then(function () { log('Activated Reports View'); });
        }

        function getReports() {
            return datacontext.getReports().then(function (data) {
                return vm.reports = data;
            });
        }
    }
})();